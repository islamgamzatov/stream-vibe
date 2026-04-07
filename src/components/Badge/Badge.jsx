import './Badge.scss'
import classNames from 'classnames'

const Bage = (props) => {
	const { 
		className,
		/*
			'' (default) | 'accent'
		*/
		mode = '',
		isBig = false, // Параметр будет отвечать за значение внутренних отступов
		children,
	} = props

	return (
		<div
			className={classNames(className, 'badge', {
				[`badge--${mode}`]: mode,
				'badge--big': isBig,
			})}
		>

		</div>
	)
}
export default Bage