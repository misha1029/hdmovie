import React, { ChangeEvent, FC } from 'react'

import { SearchField } from '../../../ui/search/SearchField'
import { AdminCreateButton } from './AdminCreateButton'

import styles from './AdminHeader.module.scss'

interface IAdminHeader {
	onClick?: () => void
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export const AdminHeader: FC<IAdminHeader> = ({
	onClick,
	searchTerm,
	handleSearch,
}) => {
	return (
		<div className={styles.header}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
            {onClick && <AdminCreateButton onClick = {onClick}/>}
		</div>
	)
}
