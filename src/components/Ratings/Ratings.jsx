import './Ratings.scss'
import RatingView from '../RatingView'

const Ratings = (props) => {
	const {
		items = [],
	} = props

	return (
		<div className="ratings">
			<ul className="ratings__list">
				{items.map(({ title, ratingValue }, index) => (
					<li className="ratings__item" key={index}>
						<h4 className="ratings__title">{title}</h4>
						<RatingView
							value={ratingValue}
							label={ratingValue}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Ratings