import React, { FC } from 'react'

import { Menu } from './Menu/Menu'
import { firstMenu, userMenu } from './menu.data'
import { GenresMenu } from './Genres/GenresMenu'

export const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenresMenu/>
			<Menu menu={userMenu} />
		</div>
	)
}
