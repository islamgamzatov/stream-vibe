import classNames from 'classnames'
import './AccordionGroup.scss'

const AccordionGroup = (props) => {
	const {
		/*
			'' (default) | 'dark'
		*/
		mode = '',
		columns = 1,
		children = [],
		isOrderedList = true // Данный параметр будет отвечать за тип используемого списка в качестве корневого элемента компонента. Если isOrderedList = true, то мы будет использовать ol и через css выводить порядковые числа возле каждого элемента AccordionGroup.
	} = props

	const itemsPerColumn = Math.ceil(children.length / columns)
	const ListTag = isOrderedList ? 'ol' : 'ul'
	
	return (
		<ListTag
			className={classNames('accordion-group', {
				[`accordion-group--${columns}-columns`]: columns > 1, // В этом объекте первое свойство будет отвечать за БЭМ-модификатор по количеству колонок.
				'accordion-group--has-counter': isOrderedList, // За этот класс мы будем цепляться в стилях, чтобы добавлять дочерним элементам списка кастомный счетчик числа.
				[`accordion-group--${mode}`]: mode,
			})}
		>
			{children.map((child, index) => (
				<li 
					className={classNames('accordion-group__item', {
						'accordion-group__item--last-column-item': columns > 1 && itemsPerColumn / (index + 1) === 1 // Этот класс должен добавляться последнему элементу в каждой колонке. Этим сложным выражением мы сравним, что текущий элемент является последним в своей колонке.
					})} 
					key={index}
				>
					{child}
				</li>
			))}
		</ListTag>
	)
}

export default AccordionGroup