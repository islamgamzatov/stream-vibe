import './Grid.scss'
import classNames from 'classnames'

const Grid = (props) => {
	const {
		columns = 1,
		children,
	} = props

	return (
		<ul className={classNames('grid', {
			[`grid--${columns}`]: columns > 1,
		})}
		>
			{children.map((child, index) => (
				<li 
					className="grid__item"
					key={index}
				>
					{child}
				</li>
			))}
		</ul>
	)
}

export default Grid