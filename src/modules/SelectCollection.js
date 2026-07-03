import BaseComponent from "./generic/BaseComponent"
import MatchMedia from "../constants/MatchMedia"

const rootSelector = '[data-js-select]'

class Select extends BaseComponent {
	selectors = {
		root: rootSelector,
		originalControl: '[data-js-select-original-control]',
		button: '[data-js-select-button]',
		dropdown: '[data-js-select-dropdown]',
		option: '[data-js-select-option]',
	}

	stateClasses = {
		isExpanded: 'is-expanded',
		isSelected: 'is-selected',
		isCurrent: 'is-current',
		isOnTheLeftSide: 'is-on-the-left-side',
		isOnTheRightSide: 'is-on-the-right-side',
	}

	initialState = {
		isExpanded: false,
		currentOptionIndex: null,
		selectedOptionElement: null,
	}

	constructor(rootElement) {
		super()
		this.rootElement = rootElement
		this.originalControlElement = rootElement.querySelector(this.selectors.originalControl)
		this.buttonElement = rootElement.querySelector(this.selectors.button)
		this.dropdownElement = rootElement.querySelector(this.selectors.dropdown)
		this.optionElements = rootElement.querySelectorAll(this.selectors.option)
		this.state = this.getProxyState({ // При обновлении значений в объекте state будет автоматически вызываться метод updateUI
			...this.initialState,
			currentOptionIndex: this.originalControlElement.selectedIndex, // У DOM-элемента оригинального селекта есть встроенное свойство selectedIndex. Оно возвращает или задает индекс текущего выбранного элемента <option>
			selectedOptionElement: this.optionElements[this.originalControlElement.selectedIndex],
		})
		setTimeout(this.fixDropdownPosition, 500) // Задержка в пол секунды нужна, чтобы наверняка произвести корректные расчеты. Если вызывать метод мгновенно, то могут возникнуть колизии и dropdown может быть споцизионирован не правильно.
		this.updateTabIndexes()
		this.bindEvents()
	}

	updateUI() {
		const {
			isExpanded,
			currentOptionIndex,
			selectedOptionElement,
		} = this.state

		const newSelectedOptionValue = selectedOptionElement.textContent.trim()

		const updateOriginalControl = () => {
			this.originalControlElement.value = newSelectedOptionValue
		}

		/*
			1. Обновляем текствое содержимое кнопки
			2. Добавляем/удаляем класс is-expanded (раскрытого состояния)
			3. Сообщаем скринридеру, раскрыт ли список
			4. Сообщаем скринридеру, какая опция сейчас активна (под фокусом)
		*/

		const updateButton = () => {
			this.buttonElement.textContent = newSelectedOptionValue
			this.buttonElement.classList.toggle(this.stateClasses.isExpanded, isExpanded)
			this.buttonElement.ariaExpanded = isExpanded
			this.buttonElement.ariaActiveDescendant = this.optionElements[currentOptionIndex].id
		}

		const updateDropdown = () => {
			this.dropdownElement.classList.toggle(this.stateClasses.isExpanded, isExpanded)
		}

		const updateOptions = () => {
			this.optionElements.forEach((optionElement, index) => {
				const isCurrent = currentOptionIndex === index
				const isSelected = selectedOptionElement === optionElement

				optionElement.classList.toggle(this.stateClasses.isCurrent, isCurrent)
				optionElement.classList.toggle(this.stateClasses.isSelected, isSelected)
				optionElement.ariaSelected = isSelected
			})
		}

		updateOriginalControl()
		updateButton()
		updateDropdown()
		updateOptions()
	}

	/*
		Метод отвечает за установку класса состояния is-on-the-left-side и is-on-the-right-side элементу select__dropdown,
		благодаря которому выпадающий список селекта будет спозиционирован с нужной стороны.
			1. Получить текущую ширину viewport.
			2. Получить кординату центра viewport по оси X.
			3. Получаем кординаты ширины кнопки и ее кординату начала по оси x.
			4. Получаем кординаты центра кнопки по оси x.
			5. Определяем, находится ли кнопка селекта в левой стороне viewport или нет.
			6. Вызываем у элемента метод.
	*/
	fixDropdownPosition = () => {
		const viewportWidth = document.documentElement.clientWidth
		const viewportCenterX = viewportWidth / 2
		const { width, x } = this.buttonElement.getBoundingClientRect()
		const buttonCenterX = x + width / 2
		const isButtonOnTheLeftViewportSide = buttonCenterX < viewportCenterX
		
		this.dropdownElement.classList.toggle(this.stateClasses.isOnTheLeftSide, isButtonOnTheLeftViewportSide)
		
		this.dropdownElement.classList.toggle(this.stateClasses.isOnTheRightSide, !isButtonOnTheLeftViewportSide)
	}

	/*
		Метод отвечает за обновление значений атрибутов tabindex на элементах originalControl и button.
		Эту манипуляцию мы должны будем выполнять в самом начале при инициализации класса select,
		а затем всякий раз при измении параметров viewport (при пересечении границы в 767px и 768px).
	*/
	updateTabIndexes(
		isMobileDevice = MatchMedia.mobile.matches // Булевый результат проверки того, является ли текущее устройство мобильным или нет (ширина устройства меньше 767px или нет).
	) {
		this.originalControlElement.tabIndex = isMobileDevice ? 0 : -1
		this.buttonElement.tabIndex = isMobileDevice ? -1 : 0
	}

	// Метод меняет состояние поля isExpanded на противоположное
	toggleExpandedState() {
		this.state.isExpanded = !this.state.isExpanded
	}

	expand() {
		this.state.isExpanded = true
	}

	collapse() {
		this.state.isExpanded = false
	}

	onMobileMatchMediaChange = (event) => { // Этот объект называется MediaQueryListEvent. Это специальный объект, который браузер создает, чтобы передать тебе информацию о том, что изменилось.
		this.updateTabIndexes(event.matches)
	}

	onOriginalControlChange = () => {
		this.state.selectedOptionElement = this.optionElements[this.originalControlElement.selectedIndex]
	}

	onButtonClick = () => {
		this.toggleExpandedState()
	}

	// Метод обрабатывает клик вне dropdown и вне кнопки его открытия. .closest(...) — встроенный метод JavaScript. Он берет элемент target и начинает подниматься вверх по дереву DOM (к родителям, прародителям и так далее).
	onClick = (event) => {
		const { target } = event // Свойство target будет хранить ссылку на элемент, который был кликнут.

		const isButtonClick = target === this.buttonElement
		const isOutsideDropdownClick = target.closest(this.selectors.dropdown) !== this.dropdownElement

		if (!isButtonClick && isOutsideDropdownClick) {
			this.collapse()
			return
		}

		const isOptionClick = target.matches(this.selectors.option) // Метод возвращает булевое значение, определяемое соответствием селектору, переданному аргументом.

		if (isOptionClick) {
			this.state.selectedOptionElement = target
			this.state.currentOptionIndex = [...this.optionElements]
				.findIndex((optionElement) => optionElement === target)
			this.collapse()
		}
	}

	// В теле этого метода мы будем привязывать слушатилели различных событий, необходимых для работы нашего кастомного селекта.
	bindEvents() {
		MatchMedia.mobile.addEventListener('change', this.onMobileMatchMediaChange)
		this.originalControlElement.addEventListener('change', this.onOriginalControlChange)
		this.buttonElement.addEventListener('click', this.onButtonClick)
		document.addEventListener('click', this.onClick)
	}
}

class SelectCollection {
	constructor() {
		this.init()
	}

	init() {
		document.querySelectorAll(rootSelector).forEach((element) => {
			new Select(element)
		})
	}
}

export default SelectCollection