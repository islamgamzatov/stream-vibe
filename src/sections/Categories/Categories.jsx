import './Categories.scss'
import Section from '../../layouts/Section'
import CategoryCard from '../../components/CategoryCard'
import Slider from '../../components/Slider'
import SliderNavigation from '../../components/Slider/components/SliderNavigation'

const Categories = () => {
	const categoryItems = [
		{
			title: 'Action',
			images: [
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
			],
		},
		{
			title: 'Adventure',
			images: [
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
			],
		},
		{
			title: 'Comedy',
			images: [
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
			],
		},
		{
			title: 'Drama',
			images: [
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
			],
		},
		{
			title: 'Horror',
			images: [
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
				'/src/assets/images/categories/action/1.jpg',
			],
		},
	]

	const sliderNavigationId = 'categories-slider-navigation'

	return (
		<Section
			title = "Explore our wide variety of categories"
			titleId = 'categories-id'
			description = "Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
			actions = {(
				<SliderNavigation
					mode="tile"
					id={sliderNavigationId} // Вернусь на этапе реализации JS кода компонента
				/>
			)}
			isActionsHiddenOnMobile
		>
			<Slider 
				navigationTargetElementId={sliderNavigationId}
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
}

export default Categories