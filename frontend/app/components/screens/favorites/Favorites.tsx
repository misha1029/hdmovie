import { useFavorites } from 'components/layout/Sidebar/MoviesContainer/FavoriteMovies.tsx/useFavorites'
import { SleletonLoader } from 'components/ui/Skeleton/SleletonLoader'
import { Heading } from 'components/ui/heading/Heading'
import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { Meta } from 'utils/meta/Meta'

import { FavoriteItem } from './FavoriteItem'
import styles from './Favorites.module.scss'

export const Favorites = () => {
	const { isLoading, favoriteMovies } = useFavorites()
	const { user } = useAuth()

	if (!user) return null

	return (
		<Meta title="Favorites">
			<Heading title="Favorites" />

			<section className={styles.favorites}>
				{isLoading ? (
					<SleletonLoader count={3} />
				) : (
					favoriteMovies?.map((movie) => (
						<FavoriteItem key={movie._id} movie={movie} />
					))
				)}
			</section>
		</Meta>
	)
}
