import CashRegisterNumber from './CashRegisterNumber/CashRegisterNumber'
import Date from './Date/Date'

import classes from './Header.module.scss'

const Header = () => (
	<header className={classes.header}>
		<p>
			<Date />
			<CashRegisterNumber />
		</p>
	</header>
)

export default Header
