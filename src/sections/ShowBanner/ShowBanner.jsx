import './ShowBanner.scss'
import MovieBannerCard from '../../components/MovieBannerCard'

const ShowBanner = () => {
	const titleId = "show-banner-title"

	return (
		<section 
			className="container"
			aria-labelledby={titleId}
		>
			<MovieBannerCard
				title="Stranger Things"
				titleId={titleId}
				TitleTag = "h1" // Теперь, если при вызове компонента MovieBannerCard передать ему параметр TitleTag со значением h1, то компонент под капотом использует нужный нам тег.
				description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
				imgSrc="/src/assets/images/movie-banner/5.jpg"
				isSmallPaddingY
			/>
		</section>
	)
}

export default ShowBanner