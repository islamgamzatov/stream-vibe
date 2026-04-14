import './MovieDetails.scss'
import SliderNavigation from '../../components/Slider/components/SliderNavigation'
import Slider from '../../components/Slider'

const MovieDetails = () => {
	const titleId = 'movie-details-title' // Для связывания заголовка с секцией
	const castSliderNavigationId = 'movie-cast-slider-navigation' // Для слейдера в блоке cast

	return (
		<section
			className='movie-details container'
			aria-labelledby={titleId}
		>
			<h2 className="visually-hidden" id={titleId}>
				Detailed movie information
			</h2>
			<div className="movie-details__main">
				<div className="movie-details__panel">
					<div className="movie-details__group">
						<h3 className="movie-details__title">Description</h3>
						<div className="movie-details__description">
							<p>The film depicts four characters affected by drug addiction and how it alters their physical and emotional states. Their addictions cause them to become imprisoned in a world of delusion and desperation.</p>
						</div>
					</div>
				</div>
				<div className="movie-details__panel">
					<header className="movie-details__panel-header">
						<h3 className="movie-details__title">
							Cast
						</h3>
						<SliderNavigation
							id={castSliderNavigationId}
							hasPagination={false}
							mode="rounded"
							buttonMode="black-08"
						/>
					</header>
					<Slider
						navigationTargetElementId={castSliderNavigationId}
						hasScrollBarOnMobile={false}
						sliderParams={{
							sliderPerView: 'auto',
							spaceBetween: 10,
							breakPoints: {
								1024: {
									sliderPerView: 'auto',
									spaceBetween: 20,
									allowTouchMove: false, // Нужно, чтобы слайдер не свайпался с помощью курсора мыши.
								}
							}
						}}
					/>
						
					<Slider/>
				</div>
				<div className="movie-details__panel"></div>
			</div>
			<aside className="movie-datails__info">
				<div className="movie-details__panel"></div>
				<div className="movie-details__panel"></div>
				<div className="movie-details__panel"></div>
			</aside>
		</section>
	)
}

export default MovieDetails