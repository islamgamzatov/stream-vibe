import Button from '../../components/Button'
import './Banner.scss'

const Banner = () => {
	const titleId = "banner-title"

	return (
		<section
			className='banner container'
			aria-labelledby={titleId}
		>
			<div className="banner__inner">
				<div className="banner__body">
					<h2 className="banner__title">
						Start your free trial today!
					</h2> 
					<div className="banner__description">
						<p>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
					</div>
				</div>
				<Button
					className="banner__button"
					label="Start a Free Trail"
					href='/subscription'
				/>
			</div>
		</section>
	)
}

export default Banner