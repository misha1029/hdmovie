import React, { FC } from 'react'
import { FavoriteMovies } from './FavoriteMovies.tsx/FavoriteMovies'
import { PopularMovies } from './PopularMovies'

export const MoviesContainer: FC = () => {
  return (
    <div>
      <PopularMovies/>
      <FavoriteMovies/>
    </div>
  )
}
