import type { AppProps } from 'next/app'
import { TypeComponentAuthFields } from 'shared/types/auth.types'

import MainProvaiders from '../app/providers/MainProvaiders'
import '../styles/globals.scss'

import { useLoaded } from './Loaded/Loaded'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	const loaded = useLoaded()

	return (
		<>
			{ loaded && (
				<MainProvaiders Component={Component}>
					<Component {...pageProps} />
				</MainProvaiders>
			)}
		</>
		/* 		<MainProvaiders Component = {Component}>
			<Component {...pageProps} />
		</MainProvaiders> */
	)
}

export default MyApp
