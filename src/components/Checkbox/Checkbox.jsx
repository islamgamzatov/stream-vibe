import './Checkbox.scss'
import getIdGromTitle from '../../utils/getIdFromTitle'
import classNames from 'classnames'

const Checkbox = (props) => {
	const {
		className,
		id = getIdGromTitle(props.label),
		label,
		isRequired,
	} = props

	return (
		<label
			className={classNames(className, 'checkbox')}
			htmlFor={id} // Зачем это нужно, если мы и так собираемся явно вкладывать input в label? Некоторые скринридеры не могут связать label с полем ввода, если они явно не связаны через атрибуты.
		>
			<input
				className="checkbox__input"
				id={id}
				type="checkbox"
				required={isRequired}
			/>
			<span className="checkbox__label">
				{label}
			</span>
		</label>
	)
}

export default Checkbox