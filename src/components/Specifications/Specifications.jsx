import './Specifications.scss'
import classNames from 'classnames'

const Specifications = (props) => {
	const {
		items = [],
	} = props

	return (
		<div className="specifications">
			<ul className="specifications__list">
				{items.map(({ key, value, isWide }, index) => (
					<div 
						className={classNames("specifications__item", {
							"specifications__item--wide": isWide,
						})}
						key={index}
					>
						<dt className="specifications__key">{key}</dt>
						<dd className="specifications__value">{value}</dd>
					</div>
				))}
			</ul>
		</div>
	)
}

export default Specifications