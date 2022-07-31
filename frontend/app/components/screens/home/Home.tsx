import { Heading } from 'components/ui/heading/Heading'
import  Slider  from 'components/ui/slider/Slider'
import React, { FC } from 'react'
import { Meta } from 'utils/meta/Meta'

import { IHome } from './home.interface'

export const Home: FC<IHome> = ({slides}) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch moviesApp online and TV shows online or stream to you browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>

			{slides.length && <Slider slides = {slides}/>}
		</Meta>
		
	)
}
