import { GenerEdit } from 'components/screens/admin/GenerEdit/GenerEdit'
import { GenreList } from 'components/screens/admin/genres/GenreList'
import React from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const GenreEditPage: NextPageAuth = () => {
	return <GenerEdit />
}

GenreEditPage.isOnlyAdmin = true

export default GenreEditPage
