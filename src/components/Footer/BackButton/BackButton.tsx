import { Button } from '@/components'
import Arrow from '/icons/arrow.svg'

import classes from './BackButton.module.scss'

const BackButton = () => (
	<Button type='button'>
		<img className={classes.arrow} src={Arrow} alt='arrow' />
	</Button>
)

export default BackButton
