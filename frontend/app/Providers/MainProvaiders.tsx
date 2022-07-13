import Layout from 'components/layout/Layout'
import React, { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { store } from 'store/store'

import { HeadProvider } from './HeaderProvider/HeadProvider'
import { ReduxToast } from './ReduxToast'

interface LayoutProps {
	children: ReactNode
}

const quryCliend = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export const MainProvaiders = ({ children }: LayoutProps) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={quryCliend}>
					<ReduxToast />
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}
