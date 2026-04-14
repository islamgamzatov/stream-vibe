import './PersonCard.scss'

const PersonCard = (props) => {
	const {
		imgSrc,
		imgAlt,
	} = props

	return (
		<div
			className="person-card"
		>
			<Image 
				className="person-card__image"
				src={imgSrc}
				alt={imgAlt}
				title={imgAlt}
			/>
		</div>
	)
}

export default PersonCard