import { Image } from 'minista'
import './MovieCard.scss'
import Badge from '../Badge'
import RatingView from '../RatingView'
const MovieCard = (props) => {
	const {
		title,
		imgSrc,
		duration,
		view,
		released,
		rating,
		href = '/move',
	} = props

	return (
		<a
			className="movie-card"
			href="/"
			title={title}
		>
			<h3 className="visually-hidden">{title}</h3>
			<Image
				className="movie-card__image"
				src={imgSrc}
			/>
			<div className="movie-card__body">
				{duration && (
					<Badge
						iconName="clock"
						iconAriaLabel="Duration"
						hasFillIcon
					>
						{duration}
					</Badge>
				)}

				{rating && (
					<Badge className="movie-card__rating-badge">
						<RatingView {...rating}/>
					</Badge>
				)}

				{view && (
					<Badge
						iconName="eye"
						iconAriaLabel="Views"
						hasFillIcon
					>
						{view}
					</Badge>
				)}
				{released && (
					<Badge className="movie-card__released-badge">
						Released at <time className='movie-card__released-badge-label' datetime={released.dateTime}>{released.label}</time>
					</Badge>
				)}
			</div>
		</a>
	)
}

export default MovieCard