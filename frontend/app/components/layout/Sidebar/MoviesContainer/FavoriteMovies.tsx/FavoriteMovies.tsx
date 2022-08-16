import { SleletonLoader } from 'components/ui/Skeleton/SleletonLoader'
import { useAuth } from 'hooks/useAuth'
import React, { FC } from 'react'

import { MoviesList } from '../MovieList'

import { NotAuthFavorites } from './NotAuthFavorites'
import { useFavorites } from './useFavorites'

export const FavoriteMovies: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites()
	const { user } = useAuth()

	if (!user) return <NotAuthFavorites />

	return isLoading ? (
		<div className="mt-11">
			<SleletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MoviesList
			link="/favorites"
			movies={favoriteMovies?.slice(0, 3) || []}
			title="Favorites"
		/>
	)
}
