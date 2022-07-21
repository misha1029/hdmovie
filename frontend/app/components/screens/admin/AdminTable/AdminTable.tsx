import { SleletonLoader } from 'components/ui/Skeleton/SleletonLoader'
import React, { FC } from 'react'

import styles from './AdminTable.module.scss'
import { AdminTableHeader } from './AdminTableHeader'
import { AdminTableItem } from './AdminTableItem'
import { ITableItem } from './adminTable.interface'

interface IAdminTable {
	tableItem: ITableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}

export const AdminTable: FC<IAdminTable> = ({
	removeHandler,
	tableItem,
	isLoading,
	headerItems,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />

			{isLoading ? (
				<SleletonLoader count={1} className="mt-4" />
			) : tableItem.length ? (
				tableItem.map((tableItem) => (
					<AdminTableItem
						key={tableItem._id}
						removeHandler={() => removeHandler(tableItem._id)}
						tableItem={tableItem}
					/>
				))
			) : (
				<div className={styles.notFound}>Elements not found</div>
			)}
		</div>
	)
}
