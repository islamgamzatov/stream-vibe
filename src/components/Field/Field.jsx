import './Field.scss'
import classNames from 'classnames'
import getIdGromTitle from '../../utils/getIdFromTitle'

const Field = (props) => {
	const {
		className,
		/*
			Так мы автоматически преобразуем label в индендификатор,
			когда компоненту Field в параметр id ничего не передали.
			Теперь параметр считается как бы не обязательным.
		*/
		id = getIdGromTitle(props.label),
		label,
		/*
			undefined (default) | 'email' | 'text-area'
		*/
		type,
		placeholder,
		isRequired,
		inputMode,
	} = props

	const Component = type === 'textarea'
		? 'textarea'
		: 'input'

	return (
		<div
			className={classNames(className, 'field')}
		>
			<label 
				className="field__label"
				htmlFor={id} // В обычном HTML для label обычно указывают атрибут for, но по правилам JSX, т.к. он работает про правилам JS синтаксиса, слово for является зарезервированным, поэтому вместо него здесь используется параметр htmlFor, который в финальной разметке станет классическим атрибутом for.
			>
				{label} {isRequired && (
					<span 
						className="field__required-star"
						aria-hidden={true} // Здесь это нужно, чтобы для пользователей скринридера не зачитывался текст с прибавкой в виде слова "звездочка" в конце.
					>*</span>
				)}
			</label>
			<div className="field__body"> {/* Зачем, собственно говоря, нужна эта обертка? Есть вариации field__body, внутри которых выводится не только input, но и select*/}
				<Component
					className="field__control"
					id={id}
					type={type}
					placeholder={placeholder}
					required={isRequired}
					inputMode={inputMode} // Нужен полю ввода номер телефона, чтобы на устройствах с виртуальной клавиатурой (touch screen) автоматически подставлялась нужная виртуальная клавиатура, содержащая только цифры и символы (+, *, #)
				/>
			</div>
		</div>
	)
}

export default Field