import { Gallery } from 'components/ui/gallery/Gallery'
import { Heading } from 'components/ui/heading/Heading'
import { SubHeading } from 'components/ui/heading/SubHeading'
import Slider from 'components/ui/slider/Slider'
import React, { FC } from 'react'
import { Meta } from 'utils/meta/Meta'

import { IHome } from './home.interface'

export const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch moviesApp online and TV shows online or stream to you browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>

			{slides.length && <Slider slides={slides} />}

			<div className="mt-10">
				<SubHeading title="Trending now" />
				{trendingMovies.length && <Gallery items={trendingMovies} />}
			</div>
			<div className="mt-10">
				<SubHeading title="Best actors" />
				{actors.length && <Gallery items={actors} />}
			</div>
		</Meta>
	)
}
