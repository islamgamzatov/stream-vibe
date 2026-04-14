import './MovieBanner.scss'
import MovieBannerCard from '../../components/MovieBannerCard'

const MovieBanner = (props) => {
	const titleId = "movie-banner-title"

	return (
		<section 
			className="container"
			aria-labelledby={titleId}
		>
			<MovieBannerCard
				title="Requiem for a Dream"
				titleId={titleId}
				TitleTag = "h1" // Теперь, если при вызове компонента MovieBannerCard передать ему параметр TitleTag со значением h1, то компонент под капотом использует нужный нам тег.
				description="The film depicts four characters affected by drug addiction and how it alters their physical and emotional states. Their addictions cause them to become imprisoned in a world of delusion and desperation."
				imgSrc="/src/assets/images/movie-banner/1.jpg"
				isSmallPaddingY
			/>
		</section>
	)
}

export default MovieBanner