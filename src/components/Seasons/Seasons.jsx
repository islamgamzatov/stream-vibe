import './Seasons.scss'
import seasonItems from './seasonItems'
import AccordionGroup from '../AccordionGroup'
import Accordion from '../Accordion'

const Seasons = () => {

	return (
		<AccordionGroup
			mode="dark"
			isOrderedList={false}
		>
			{seasonItems.map(( { title, subtitle, episodes }, index) => (
				<Accordion
					title={title}
					titleLevelClassName='h4'
					subtitle={subtitle}
					id={`season-${index}`}
					name="seasons"
					isOpen={index === 0} // Раскрытым должен быть только первый аккордеон из всего списка
					key={index}
					isArrowButton
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, eos.
				</Accordion>
			))}
		</AccordionGroup>
	)
}

export default Seasons