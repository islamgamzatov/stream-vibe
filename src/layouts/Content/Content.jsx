// Верхнеуровневый слой, который нужно будет использовать на каждой странице.
import classNames from 'classnames';
import './Content.scss'

const Content = (props) => {
	const { 
		children,
		isResetPaddingTop = false,
	 } = props;

	return (
		<main 
			className={classNames('content', {
				'content--reset-padding-top': isResetPaddingTop
			})}
		>
			{children}
		</main>
	)
}

export default Content