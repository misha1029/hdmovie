import cn from 'classnames'
import { useFavorites } from 'components/layout/Sidebar/MoviesContainer/FavoriteMovies.tsx/useFavorites'
import React, { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { UserService } from 'services/user.service'
import { toastrError } from 'utils/toastrError/toastrError'

import styles from './FavoriteButton.module.scss'
import HeartImage from './heart-animation.png'

export const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isSmashed, setIsSmashed] = useState(false)

	const { favoriteMovies, refetch } = useFavorites()

	useEffect(() => {
		if (!favoriteMovies) return

		const isHasMovie = favoriteMovies.some((f) => f._id === movieId)
		if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
	}, [favoriteMovies, isSmashed, movieId])

	const { mutateAsync } = useMutation(
		'update favorites',
		() => UserService.toggleFavorites(movieId),
		{
			onError: (error) => {
				toastrError(error, 'Update favorite list')
			},
			onSuccess() {
				setIsSmashed(!isSmashed)
				refetch()
			},
		}
	)

	return (
		<button
			onClick={() => mutateAsync()}
			className={cn(styles.button, {
				[styles.animate]: isSmashed,
			})}
			style={{ backgroundImage: `url(${HeartImage.src})` }}
		></button>
	)
}
