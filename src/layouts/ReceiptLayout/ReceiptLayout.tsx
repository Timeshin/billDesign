import { Header, Footer } from '@/components'
import { FC, ReactNode } from 'react'

import classes from './ReceiptLayout.module.scss'

interface IReceiptLayout {
	children: ReactNode
}

const ReceiptLayout: FC<IReceiptLayout> = ({ children }) => (
	<div className={classes.layout}>
		<div className={classes.contentBackgound}>
			<Header />
			<main className={classes.content}>{children}</main>
		</div>
		<Footer />
	</div>
)

export default ReceiptLayout
