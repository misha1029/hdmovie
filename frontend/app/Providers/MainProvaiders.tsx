import Layout from 'components/layout/Layout'
import React, { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { TypeComponentAuthFields } from 'shared/types/auth.types'
import { store } from 'store/store'

import  AuthProvider  from './AuthProvider/AuthProvider'
import { HeadProvider } from './HeaderProvider/HeadProvider'
import { ReduxToast } from './ReduxToast'

interface LayoutProps {
	children: ReactNode
}

type TypeLayoutProps = LayoutProps & TypeComponentAuthFields

const quryCliend = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvaiders = ({ children, Component }: TypeLayoutProps) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={quryCliend}>
					<ReduxToast />
					<AuthProvider Component={Component}>
						<Layout>{children}</Layout>
					</AuthProvider>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}

export default MainProvaiders

/* import Layout from 'components/layout/Layout'
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
} */
