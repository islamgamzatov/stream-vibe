import './Accordion.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'

const Accordion = (props) => {
	const {
		className,
		title,
		titleLevelClassName = 'h5',
		subtitle,
		id,
		name, // name нужен, чтобы сгруппировать несколько Accordion в одну группу, чтобы при раскрытии содержимого одного закрывались все другие Accordion из той же группы.
		isOpen, // Параметр будет отвечать за начальное состояние Accordion
		children, // Внутренне содержимое. То, что раскрывается по клику на заголовок
		isArrowButton,
	} = props

	return (
		<div className="accordion">
			{/*
				В accordion__details будет выводиться заголовок.
				В accordion__content будет выводиться по умолчанию скрытый контент.
			*/}
			<details 
				className="accordion__details"
				name={name}
				open={isOpen} // Атрибут open у элемента details отвечает за начальное состояние отображения внутреннего содержимого после загрузки страницы.
			>
				<summary className="accordion__summary">
					<h3 
						className={classNames('accordion__title', titleLevelClassName)}
					>
						<span role='term' aria-details={id}>{title}</span> {/* этот span нужен для того, чтобы грамотно обеспечить accessibility нашему компоненту аккордеона */}
						{subtitle && <span className='accordion__subtitle'>{subtitle}</span>}
						{isArrowButton && (
							<div className='accordion__arrow'>
								<Icon
									name="arrow-down"
								/>
							</div>
						)}
					</h3>
				</summary>
			</details>
			<div /* Благодарая указанному id мы свяжем заголовок аккордеона с соотвествующим содержимым */
				className="accordion__content" id={id}
				role="definition"
			>
				<div className="accordion__content-inner">
					<div className="accordion__content__body">
						{children}
					</div>
				</div>
			</div>
		</div>
	)
}



export default Accordion