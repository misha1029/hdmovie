import { Gallery } from 'components/ui/gallery/Gallery'
import { SubHeading } from 'components/ui/heading/SubHeading'

import dynamic from 'next/dynamic'
import React, { FC } from 'react'
import { Meta } from 'utils/meta/Meta'

import { IMoviePage } from '../../../../pages/movie/[slug]'

import { Banner } from './Banner/Banner'
import { Content } from './Content/Content'

const DynamicPlayer = dynamic(() => import('../../ui/video-player/VideoPlayer'), {
	ssr: false,
})

export const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	return (
		<Meta title={movie.title} description={`Watch ${movie.title}`}>
			<Banner
				image={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

            <DynamicPlayer slug = {movie.slug} videoSources = {movie.videoUrl}/>

			<div className="mt-12">
				<SubHeading title="Similar" />
				<Gallery items={similarMovies} />
			</div>
		</Meta>
	)
}
