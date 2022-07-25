
import { MovieEdit } from 'components/screens/admin/MovieEdit/MovieEdit'
import React from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const GenreEditPage: NextPageAuth = () => {
	return <MovieEdit />
}

GenreEditPage.isOnlyAdmin = true

export default GenreEditPage
