import React, { FC } from 'react'

import { Menu } from './Menu/Menu'
import { firstMenu, userMenu } from './menu.data'

export const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<Menu menu={userMenu} />
		</div>
	)
}
