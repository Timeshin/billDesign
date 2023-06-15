import ReceiptPrice from './ReceiptPrice/ReceiptPrice'

import classes from './ReceiptContent.module.scss'

const ReceiptContent = () => (
	<div className={classes.content}>
		<h2>Стоимость покупок</h2>
		<ReceiptPrice />
		<h3 className={classes.text}>
			Приложите
			<br /> или прокатайте карту
		</h3>
	</div>
)

export default ReceiptContent
