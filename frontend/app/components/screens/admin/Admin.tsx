import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { Meta } from 'utils/meta/Meta'

import { AdminNavigation } from './AdminNavigation/AdminNavigation'
import { Statistics } from './Statistics/Statistics'


export const Admin: FC = () => {
	return (
		<Meta title="Admin panel">
			<AdminNavigation />
			<Heading title="Some statistics" />
			<Statistics />
		</Meta>
	)
}
