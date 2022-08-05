import { getMovieUrl } from 'config/url.config'
import Link from 'next/link'
import React, { FC } from 'react'

import styles from './AuthPlaceholder.module.scss'

export const AuthButton: FC<{ slug: string }> = ({ slug }) => {
	return (
		<Link href={`/auth?redirect=${getMovieUrl(slug)}`}>
			<a className={styles.btn}>Sign In</a>
		</Link>
	)
}
