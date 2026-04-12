import Badge from '../Badge'
import './MovieCard.scss'
import { Image } from 'minista'

const MovieCard = (props) => {
	const {
		title,
		imgSrc,
		duration,
		view,
		href = '/move'
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
				{view && (
					<Badge
						iconName="eye"
						iconAriaLabel="Views"
						hasFillIcon
					>
						{view}
					</Badge>
				)}
			</div>
		</a>
	)
}

export default MovieCard