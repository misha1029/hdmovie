import cn from 'classnames'
import { MaterialIcon } from 'components/ui/MaterialIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { IMenuItem } from '../menu.interface'

import styles from './Menu.module.scss'

export const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
			<li
				className={cn({
					[styles.active]: asPath === item.link
				})}>
				<Link href={item.link}>
					<a>
						<MaterialIcon name={item.icon} />
						<span>{item.title}</span>
					</a>
				</Link>
			</li>
	)
}
