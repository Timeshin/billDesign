import BackButton from './BackButton/BackButton'
import StuffButton from './StuffButton/StuffButton'

import classes from './Footer.module.scss'

const Footer = () => (
	<footer className={classes.footer}>
		<BackButton />
		<StuffButton />
	</footer>
)

export default Footer
