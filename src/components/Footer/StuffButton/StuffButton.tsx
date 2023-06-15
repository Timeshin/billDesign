import { Button } from '@/components'
import Man from '/icons/man.svg'

import classes from './StuffButton.module.scss'

const StuffButton = () => (
	<Button>
		<p className={classes.text}>
			<img src={Man} alt='man' />
			Вызов сотрудника
		</p>
	</Button>
)

export default StuffButton
