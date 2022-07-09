import type { AppProps } from 'next/app'

import { MainProvaiders } from '../app/Providers/MainProvaiders'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MainProvaiders>
			<Component {...pageProps} />
		</MainProvaiders>
	)
}

export default MyApp