import { Heading } from 'components/ui/heading/Heading'
import React, { FC } from 'react'
import { Meta } from 'utils/meta/Meta'

import { AdminHeader } from '../AdminHeader/AdminHeader'
import { AdminNavigation } from '../AdminNavigation/AdminNavigation'
import { AdminTable } from '../AdminTable/AdminTable'

import { useActors } from './useActors'

export const ActorList: FC = () => {
	const {
		handleSearch,
		isLoading,
		searchTerm,
		data,
		deleteAsync,
		createAsync,
	} = useActors()
	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title="Actors" />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={deleteAsync}
				headerItems={['Name', 'Count movies']}
				tableItem={data || []}
			/>
		</Meta>
	)
}
