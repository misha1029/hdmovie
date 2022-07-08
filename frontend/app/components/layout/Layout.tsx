import { FC, ReactNode } from 'react'
import styles from './Layout.module.scss'
import { Navigation } from './Navigation/Navigation'
import { Sidebar } from './Sidebar/Sidebar'

interface LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
