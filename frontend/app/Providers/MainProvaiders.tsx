import Layout from 'components/layout/Layout'
import React, { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

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
		<QueryClientProvider client={quryCliend}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}
