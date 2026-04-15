import './ReviewCard.scss'
import Badge from '../Badge'
import RatingView from '../RatingView'

const ReviewCard = (props) => {
	const {
		name,
		subtitle,
		description,
		ratingValue,
	} = props

	return (
		<div className="review-card">
			<header className="review-card__header">
				<div className="review-card__author">
					<h4 className="review-card__name h6">{name}</h4>
					<div className="review-card__subtitle">{subtitle}</div>
				</div>
				<Badge>
					<RatingView
						value={ratingValue}
						label={ratingValue}
					/>
				</Badge>
			</header>
			<div className="review-card__body">
				<div className="review-card__description">
					<p>{description}</p>
				</div>
			</div>
		</div>
	)
}

export default ReviewCard