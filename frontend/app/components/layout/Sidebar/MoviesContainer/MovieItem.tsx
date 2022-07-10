import { MaterialIcon } from 'components/ui/MaterialIcon'
import { getGenreUrl, getMovieUrl } from 'config/url.config'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { MdStarRate } from 'react-icons/md'
import { IMovie } from 'shared/types/movie.types'
import { getGenresEach } from 'utils/movie/getGenresEach'

import styles from './MovieList.module.scss'

export const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						width={65}
						height={97}
						src={movie.poster}
						alt={movie.title}
						draggable={false}
						priority
					/>
				</a>
			</Link>
			<div className={styles.info}>
				<div>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map((genre, idx) => (
							<Link key={genre._id} href={getGenreUrl(genre.slug)}>
								<a>{getGenresEach(idx, movie.genres.length, genre.name)}</a>
							</Link>
						))}
					</div>
				</div>

				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}
