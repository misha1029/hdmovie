import { SleletonLoader } from 'components/ui/Skeleton/SleletonLoader'
import React from 'react'
import { useQuery } from 'react-query'
import { MovieService } from 'services/movie.service'

import { MoviesList } from './MovieList'

export const PopularMovies = () => {
	const { isLoading, data: popularMovies } = useQuery(
		'Popular movies in sidebar',
		() => MovieService.getMostPopularMovies(),
		{ select: (data) => data.slice(0, 3) }
	)
	return isLoading ? (
		<div className="mt-11">
			<SleletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MoviesList
			link="/trending"
			movies={popularMovies || []}
			title="Popular Movies"
		/>
	)
}
