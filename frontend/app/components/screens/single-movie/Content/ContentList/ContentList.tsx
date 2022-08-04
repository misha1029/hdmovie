import Link from 'next/link'
import React, { FC, Fragment } from 'react'

import styles from './ContentList.module.scss'
import { IContentList } from './content.interface'

export const ContentList: FC<IContentList> = ({ links, name }) => {
	return (
		<div className={styles.list}>
			<div className={styles.name}> {name}</div>
			<div className={styles.links}>
				{links.map((link, idx) => (
					<Fragment key={idx}>
						<Link href={link.link}>
							<a>{link.title}</a>
						</Link>
						{idx + 1 !== links.length ? ', ' : ''}
					</Fragment>
				))}
			</div>
		</div>
	)
}
