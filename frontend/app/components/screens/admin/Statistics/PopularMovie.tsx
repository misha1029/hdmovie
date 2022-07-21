import cn from 'classnames'
import { SleletonLoader } from 'components/ui/Skeleton/SleletonLoader'
import { SubHeading } from 'components/ui/heading/SubHeading'
import { getMovieUrl } from 'config/url.config'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { MovieService } from 'services/movie.service'
import { IMovie } from 'shared/types/movie.types'

import styles from '../Admin.module.scss'

export const PopularMovie: FC = () => {
	const { isLoading, data: movie } = useQuery(
		'Most popular movie in admin',
		() => MovieService.getMostPopularMovies(),
		{
			select: (data): IMovie => data[0],
		}
	)
	return (
		<div className={cn(styles.block, styles.popular)}>
			<SubHeading title="The most popular movie" />
			{isLoading ? (
				<SleletonLoader className="h-48" />
			) : (
				movie && (
					<>
						<h3>Opened {movie.countOpened} times</h3>
						<Link href={getMovieUrl(movie.slug)}>
							<a>
								<Image
									width={285}
									height={176}
									src={movie.bigPoster}
									alt={movie.title}
									className={styles.image}
									unoptimized
								/>
							</a>
						</Link>
					</>
				)
			)}
		</div>
	)
}
