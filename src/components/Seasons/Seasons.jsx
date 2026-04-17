import './Seasons.scss'
import seasonItems from './seasonItems'
import AccordionGroup from '../AccordionGroup'
import Accordion from '../Accordion'
import EpisodeCard from '../EpisodeCard'

const Seasons = () => {

	return (
		<AccordionGroup
			className="seasons"
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
					<ul className="seasons__list">
						{episodes.map((episode, index) => (
							<li className="seasons__item" key={index}>
								<EpisodeCard {...episode}/>
							</li>
						))}
					</ul>
				</Accordion>
			))}
		</AccordionGroup>
	)
}

export default Seasons