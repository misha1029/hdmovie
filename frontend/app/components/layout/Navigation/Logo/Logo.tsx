import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import imageLogo from '../../../../assets/images/logo.svg'

export const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout mb-10 block">
				<Image
					src={imageLogo}
					width={247}
					height={34}
					alt="Online cinema"
					draggable={false}
				/>
			</a>
		</Link>
	)
}
