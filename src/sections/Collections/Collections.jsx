import './Collections.scss'
import Tabs from '../../components/Tabs'
import collectionGroups from './collectionGroups'
import getIdGromTitle from '../../utils/getIdFromTitle'
import Section from '../../layouts/Section'
import SliderNavigation from '../../components/Slider/components/SliderNavigation'
import Slider from '../../components/Slider'
import CategoryCard from '../../components/CategoryCard'

const Collections = () => {
	return (
		<Tabs
			className="collections container"
			title="collections"
			isEnableOnlyOnMobile
			items={collectionGroups.map((collectionGroup) => ({
				isActive: collectionGroup.isActive,
				title: collectionGroup.title,
				children: (
					<div className='collections__group'>
						<p className="collections__title hidden-mobile">
							{collectionGroup.title}
						</p>
						{collectionGroup.items.map((collectionItem, index) => {
							const {
								title,
								categoryItems,
								sliderParams,
							} = collectionItem

							/*
								Объявим несколько вспомогательных переменных для генерации уникальных идентификаторов, необходимых для корректной работы компонентов слайдеров и обеспечения a11y
							*/
							const titleFomratted = `${getIdGromTitle(collectionGroup.title)}-${getIdGromTitle(title)}`
							const titleId = `${titleFomratted}-title`
							const sliderNavigationId = `${titleFomratted}-slider-navigation`

							return (
								<Section
									className="collections__section"
									title={title}
									titleId={titleId}
									actions={(
										<SliderNavigation
											id={sliderNavigationId}
											mode="tile"
										/>
									)}
									isActionsHiddenOnMobile
									key={index} // Это необходимо по правилам JSX синтаксиса, т.к. этот элемент является корневым, который возвращается на каждой итеррации метода map.
								>
									<Slider
										sliderParams={sliderParams}
										navigationTargetElementId={sliderNavigationId}
										bleedMobileS
									>
										{categoryItems.map((categoryItem, index) => (
											<CategoryCard
												{...categoryItem}
												key={index}
											/>
										))}
									</Slider>
								</Section>
							)
						})}
					</div>
				)
			}))}
		/>
	)
}
 
export default Collections