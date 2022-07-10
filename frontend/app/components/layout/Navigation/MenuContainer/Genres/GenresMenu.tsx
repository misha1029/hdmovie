import React, { FC } from 'react'

import { Menu } from '../Menu/Menu'

import { usePopularGenres } from './usePopularGenres'

export const GenresMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">Loading...</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}
{/* <SleletonLoader count = {5} className = "h-7 mt-6"/> */}