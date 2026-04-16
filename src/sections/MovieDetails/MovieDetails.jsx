import './MovieDetails.scss'
import SliderNavigation from '../../components/Slider/components/SliderNavigation'
import Slider from '../../components/Slider'
import PersonCard from '../../components/PersonCard'
import Button from '../../components/Button'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import Icon from '@/components/Icon'
import Tags from '../../components/Tags'
import Ratings from '../../components/Ratings'


const MovieDetails = () => {
	const titleId = 'movie-details-title' // Для связывания заголовка с секцией
	const castSliderNavigationId = 'movie-cast-slider-navigation' // Для слейдера в блоке cast

	const castItems = [
		{ imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Jennifer Connelly' },
		{ imgSrc: '/src/assets/images/people/2.jpg', imgAlt: 'Jared Leto' },
		{ imgSrc: '/src/assets/images/people/3.jpg', imgAlt: 'Ellen Burstyn' },
		{ imgSrc: '/src/assets/images/people/4.jpg', imgAlt: 'Marlon Wayans' },
		{ imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Jennifer Connelly' },
		{ imgSrc: '/src/assets/images/people/2.jpg', imgAlt: 'Jared Leto' },
		{ imgSrc: '/src/assets/images/people/3.jpg', imgAlt: 'Ellen Burstyn' },
		{ imgSrc: '/src/assets/images/people/4.jpg', imgAlt: 'Marlon Wayans' },
		{ imgSrc: '/src/assets/images/people/1.jpg', imgAlt: 'Jennifer Connelly' },
		{ imgSrc: '/src/assets/images/people/2.jpg', imgAlt: 'Jared Leto' },
		{ imgSrc: '/src/assets/images/people/3.jpg', imgAlt: 'Ellen Burstyn' },
		{ imgSrc: '/src/assets/images/people/4.jpg', imgAlt: 'Marlon Wayans' },
	]

	const reviewItems = [
		{
			name: "Aniket Roy",
			subtitle: "From India",
			description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
			ratingValue: 5,
		},
		{
			name: "Aniket Roy",
			subtitle: "From India",
			description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
			ratingValue: 5,
		},
		{
			name: "Aniket Roy",
			subtitle: "From India",
			description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
			ratingValue: 5,
		},
		{
			name: "Aniket Roy",
			subtitle: "From India",
			description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
			ratingValue: 5,
		},
		{
			name: "Aniket Roy",
			subtitle: "From India",
			description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
			ratingValue: 5,
		},
		{
			name: "Aniket Roy",
			subtitle: "From India",
			description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
			ratingValue: 5,
		},
		{
			name: "Aniket Roy",
			subtitle: "From India",
			description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
			ratingValue: 5,
		},
		{
			name: "Aniket Roy",
			subtitle: "From India",
			description: "This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.",
			ratingValue: 5,
		},
	]

	return (
		<section
			className='movie-details container'
			aria-labelledby={titleId}
		>
			<h2 className="visually-hidden" id={titleId}>
				Detailed movie information
			</h2>
			<div className="movie-details__main">
				<div className="movie-details__panel movie-details__panel--description">
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
						hasScrollbarOnMobile={false}
						sliderParams={{
							slidesPerView: 'auto',
							spaceBetween: 10,
							breakpoints: {
								1024: {
									slidesPerView: 'auto',
									spaceBetween: 20,
									allowTouchMove: false, // Нужно, чтобы слайдер не свайпался с помощью курсора мыши.
								}
							}
						}}
					>
						{castItems.map((castItem, index) => (
							<PersonCard {...castItem} key={index} />
						))}
					</Slider>
				</div>
				<div className="movie-details__panel movie-details__panel--large-gap-y">
					<header className="movie-details__panel-header">
						<h3 className="movie-details__title">Reviews</h3>
						<Button
							mode="black-08"
							iconName="plus"
							label="Add Your Review"
							href="/"
						/>
					</header>
					<Slider
						navigationMode="rounded"
						isNavigationHiddenMobile={false}
						hasScrollbarOnMobile={false}
						sliderParams = {{
							slidesPerView: 2,
							slidesPerGroup: 2,
							breakpoints: {
								0: {
									slidesPerView: 1,
									slidesPerGroup: 1,
									spaceBetween: 16,
								},
								1024: {
									slidesPerView: 2,
									slidesPerGroup: 2,
									allowTouchMove: false,
									spaceBetween: 20,
								},
							}
						}}
					>
						{reviewItems.map((reviewItem, index) => (
							<ReviewCard {...reviewItem} key={index}/>
						))}
					</Slider>
				</div>
			</div>
			<aside className="movie-details__info">
				<div className="movie-details__panel">
					<div className="movie-details__groups">
						<div className="movie-details__group">
							<h3 className="movie-details__title">
								<Icon name="calendar" />
								<span>Released Year</span>
							</h3>
							<div className="movie-details__description">
								<time className="h6" datetime="2022">2022</time>
							</div>
						</div>
						<div className="movie-details__group">
							<h3 className="movie-details__title">
								<Icon name="language" />
								<span>Available Languages</span>
							</h3>
							<Tags items={['English', 'Russian', 'Hindi', 'Tamil', 'Telegu', 'Kannada']}/>
						</div>
						<div className="movie-details__group">
							<h3 className="movie-details__title">
								<Icon name="star" />
								<span>Ratings</span>
							</h3>
							<Ratings 
								items={[
									{ title:"IMDb", ratingValue:"5" },
									{ title:"Streamvibe", ratingValue:"4" },
								]} 
							/>
						</div>
						<div className="movie-details__group">
							<h3 className="movie-details__title">
								<Icon name="genres" />
								<span>Genres</span>
							</h3>
							<Tags items={['Action', 'Adventure']} />
						</div>
						<div className="movie-details__group">
							<h3 className="movie-details__title">
								Director
							</h3>
							<PersonCard
								name="Darren Aronofsky"
								subtitle="From USA"
								imgSrc="/src/assets/images/people/director/1.jpg"
							/>
						</div>
						<div className="movie-details__group">
							<h3 className="movie-details__title">
								Music
							</h3>
							<PersonCard
								name="Clint Mansel"
								subtitle="From USA"
								imgSrc="/src/assets/images/people/director/2.jpg"
							/>
						</div>
					</div>
				</div>
			</aside>
		</section>
	)
}

export default MovieDetails