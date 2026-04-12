import './Badge.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'

const Bage = (props) => {
	const { 
		className,
		/*
			'' (default) | 'accent'
		*/
		mode = '',
		isBig = false, // Параметр будет отвечать за значение внутренних отступов
		children,
		iconName,
		hasFillIcon,
		iconAriaLabel,
	} = props

	return (
		<div
			className={classNames(className, 'badge', {
				[`badge--${mode}`]: mode,
				'badge--big': isBig,
			})}
		>
			{iconName && (
				<Icon
					className="badge__icon"
					name={iconName}
					hasFill={hasFillIcon}
					iconAriaLabel={iconAriaLabel}
				/>
			)}
			<span>{children}</span>
		</div>
	)
}
export default Bage