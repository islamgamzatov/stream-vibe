import './MoviesBanner.scss'
import Slider from '../../components/Slider'
import MovieBannerCard from '../../components/MovieBannerCard'

const MoviesBanner = () => {
	const titleId = 'movies-banner-title'

	const movieCards = [
		{
			title: "Requiem for a Dream",
			description: "The film depicts four characters affected by drug addiction and how it alters their physical and emotional states. Their addictions cause them to become imprisoned in a world of delusion and desperation.",
			imgSrc: '/src/assets/images/movie-banner/1.jpg',
		},
		{
			title: "Fight Club",
			description: "Fight Club is a dark psychological thriller directed by David Fincher that critiques consumerism, corporate culture, and modern masculinity.",
			imgSrc: '/src/assets/images/movie-banner/2.jpg',
		},
		{
			title: "Se7en",
			description: "Se7en is a dark, gritty psychological thriller directed by David Fincher, starring Morgan Freeman and Brad Pitt as two homicide detectives tracking a sadistic serial killer",
			imgSrc: '/src/assets/images/movie-banner/3.jpg',
		},
		{
			title: "American Beauty",
			description: "American Beauty is a dark comedy-drama exploring suburban discontent, the American Dream, and personal liberation.",
			imgSrc: '/src/assets/images/movie-banner/4.jpg',
		},
	]

	return (
		<section
			className="movies-banner container"
			aria-labelledby={titleId}
		>
			<h1 className="visually-hidden" id={titleId}>
				Movies & Shows
			</h1>
			<Slider
				sliderParams={{
					slidesPerView: 1,
					breakpoints: {
						1024: {
							allowTouchMove: false,
						}
					}
				}}
				navigationPosition="abs-bottom"
				hasScrollbarOnMobile={false}
			>
				{movieCards.map((movieCard, index) => (
					<MovieBannerCard
						{...movieCard}
						key={index}
					/>
				))}
			</Slider>
		</section>
	)
}

export default MoviesBanner
