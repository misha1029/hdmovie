import { getMovieUrl } from 'config/url.config'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { IMovie } from 'shared/types/movie.types'

import { FavoriteButton } from '../single-movie/FavoriteButton/FavoriteButton'

import styles from './Favorites.module.scss'

export const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.itemWrapper}>
			<FavoriteButton movieId={movie._id} />
			<Link href={getMovieUrl(movie.slug)}>
				<a className={styles.item}>
					<Image
						alt={movie.title}
						src={movie.bigPoster}
						layout="fill"
						draggable={false}
						priority
					/>
					<div className={styles.title}>{movie.title}</div>
				</a>
			</Link>
		</div>
	)
}
