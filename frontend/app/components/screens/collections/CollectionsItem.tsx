import cn from 'classnames'
import { getGenreUrl } from 'config/url.config'
import Link from 'next/link'
import React, { FC } from 'react'

import styles from './Collections.module.scss'
import { CollectionsImage } from './CollectionsImage'
import { ICollection } from './collections.interface'

export const CollectionsItem: FC<{ collection: ICollection }> = ({
	collection,
}) => {
	return (
		<Link href={getGenreUrl(collection.slug)}>
			<a className={styles.collection}>
				<CollectionsImage collection={collection} />

				<div className={styles.content}>
					<div className={styles.title}> {collection.title}</div>
				</div>

				<div className={cn(styles.behind, styles.second)}>
					<CollectionsImage collection={collection} />
				</div>
                <div className={cn(styles.behind, styles.third)}>
					<CollectionsImage collection={collection} />
				</div>
			</a>
		</Link>
	)
}
