import type { AppProps } from 'next/app'
import { TypeComponentAuthFields } from 'shared/types/auth.types'

import  MainProvaiders  from '../app/providers/MainProvaiders'
import '../styles/globals.scss'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvaiders Component = {Component}>
			<Component {...pageProps} />
		</MainProvaiders>
	)
}

export default MyApp
