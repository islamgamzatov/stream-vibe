import './Support.scss'
import { Image } from 'minista'

const Support = () => {
	const titleId = 'support-title'

	return (
		<section 
			className="support container"
			aria-labelledby={titleId}
		>
			<div className="support__body">
				<div className="support__info">
					<h1 className="support__title h2" id={titleId}>
						Welcome to our support page!
					</h1>
					<div className="support__descirption">
						<p>We're here to help you with any problems you may be having with our product.</p>
					</div>
				</div>
				<Image
					className='support__image'
					src="/src/assets/images/support/1.png"
				/>
			</div>
			<form className="support__form" action="">
				
			</form>
		</section>
	)
}

export default Support