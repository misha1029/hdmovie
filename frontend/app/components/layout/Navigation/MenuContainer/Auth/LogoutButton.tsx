import { MaterialIcon } from 'components/ui/MaterialIcon'
import { useActions } from 'hooks/useActions'
import React, { FC, MouseEvent } from 'react'

export const LogoutButton: FC = () => {
	const { logout } = useActions()

	const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault
		logout()
	}
	return (
		<li>
			<a onClick={handleLogout}>
				<MaterialIcon name="MdLogout" />
				<span>Logout</span>
			</a>
		</li>

	)
}
