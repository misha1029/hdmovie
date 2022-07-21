import {Admin} from 'components/screens/admin/Admin'
import React, { FC } from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const AdminPage: NextPageAuth = () => {
	return (
		<>
			<Admin />
		</>
	)
}

AdminPage.isOnlyAdmin = true

export default AdminPage
