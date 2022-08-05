import { useAuth } from 'hooks/useAuth'
import React, { FC } from 'react'
import StarRating from 'react-star-rating-component'

import { AuthButton } from '../AuthPlaceholder/AuthButton'

import styles from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'

interface IRateMovie {
	id: string
	slug: string
}

const RateMovie: FC<IRateMovie> = ({ id, slug }) => {
	const { user } = useAuth()

	const { handleClick, rating, isSended } = useRateMovie(id)

	return (
		<div className={styles.wrapper}>
			<h3> How do wou like the movie?</h3>
			<p>Rating improve recomendations</p>
			{user ? (
				<>
					{isSended ? (
						<div className={styles.thanks}> Thanks for rating!</div>
					) : (
						<StarRating
							name="star-rating"
							value={rating}
							onStarClick={handleClick}
							emptyStarColor="#4f4f4f"
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
