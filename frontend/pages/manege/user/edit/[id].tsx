import { UserEdit } from 'components/screens/admin/UserEdit/UserEdit'
import React from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const UserEditPage: NextPageAuth = () => {
	return <UserEdit />
}

UserEditPage.isOnlyAdmin = true

export default UserEditPage
