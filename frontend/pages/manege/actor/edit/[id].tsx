
import { ActorEdit } from 'components/screens/admin/ActorEdit/ActorEdit'
import React from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const ActorEditPage: NextPageAuth = () => {
	return <ActorEdit />
}

ActorEditPage.isOnlyAdmin = true

export default ActorEditPage
