import cn from 'classnames'
import { SleletonLoader } from 'components/ui/Skeleton/SleletonLoader'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { AdminService } from 'services/auth/admin-service'

import styles from '../Admin.module.scss'

export const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountUsers()
	)

	return (
		<div className={cn(styles.block, styles.countUsers)}>
			<div>
				{isLoading ? (
					<SleletonLoader />
				) : (
					<div className={styles.number}>{response?.data}</div>
				)}
                <div className = {styles.description}>
                    users
                </div>
			</div>
		</div>
	)
}
