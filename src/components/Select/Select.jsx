import getIdGromTitle from '../../utils/getIdFromTitle'
import './Select.scss'
import classNames from 'classnames'

const Select = (props) => {
	const {
		id = getIdGromTitle(props.label),
		label,
		isLabelHidden = true,
		/*
			Array<{
					value: string
					isSelected?: boolean
			}>
		*/
		options = [],
		buttonClassName,
	} = props

	const IDs = {
		originalControl: id,
		label: `${id}-label`,
		dropdown: `${id}-dropdown`,
	}
	/*
		Callback функция на каждой итеррации возвращает сущность option, объект со свойствами.
		Мы из этого объекта деструктурируем свойство isSelected и тут же возвращаем его как результат этой функции.
	*/
	const selectedOption = options.find((option) => option.isSelected) ?? options[0];

	return (
		<div className="select" data-js-select="">
			<label
				className={classNames('select__label', { 
					'visually-hidden': isLabelHidden, // Так мы визуально скроем label только в тех случаях, когда параметр isLabelHidden имеет значение true.
				})}
				id={IDs.label}
				htmlFor={IDs.originalControl}
			>
				{label}
			</label>
			<select 
				className={classNames("select__original-control", buttonClassName)}
				id={IDs.originalControl}
				tabIndex={-1}
				data-js-select-original-control=""
				/*
					Насчет выбранной опции по умолчанию: по правилам HTML для этой цели мы должны добавлять конкретному элементу option атрибут selected.
					Но по правилам JSX нужно делать иначе.
					Нужно самому элементу select указать специальный параметр defaultValue, а в значении указать value по умолчанию выбранной опции.
				*/
				defaultValue={selectedOption.value} 
			>
				{options.map(({ value }, index) => (
					<option value={value} key={index}>
						{value}
					</option>
				))}
			</select>
			<div className="select__body">
				<div 
					className={classNames("select__button", buttonClassName)}
					role='combobox'
					aria-expanded='false'
					aria-haspopup="listbox" // Данным атрибутом пользователям скринридера мы говорим, что активация кнопки select__button приведен	к раксрытию выпадающего popup окошка.
					aria-controls={IDs.dropdown}
					aria-labelledby={IDs.label}
					tabIndex={0}
					data-js-select-button=""
				>
					{selectedOption.value}
				</div>
				<div 
					className="select__dropdown"
					role="listbox"
					id={IDs.dropdown}
					aria-labelledby={IDs.label}
					data-js-select-dropdown=""
				>
					{options.map(( option, index ) => {
						const {
							value,
							isSelected = false,
						} = option

						return (
							<div
								className={classNames("select__option", {
									'is-selected': isSelected, // Отвечает за состояние текущей выбранной отмеченной опции.
									'is-current': isSelected, // Отвечает за состояние похожее на фокусировку, когда мы будем взаимодействовать с выпадающим списком селекта через клавиатуру (через клавиши со стрелками вверх и вниз).
								})}
								id={`${id}-option-${index}`}
								role="option"
								aria-selected={isSelected}
								data-js-select-option=""
								key={index}
							>
								{value}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Select