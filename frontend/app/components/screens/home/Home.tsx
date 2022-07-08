import Layout from 'components/layout/Layout'
import React, { FC } from 'react'

import { IHome } from './home.interface'

export const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>HamePage Page</h1>
		</Layout>
	)
}
