import { Catalog } from 'components/ui/catalog-movie/Catalog'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { MovieService } from 'services/movie.service'
import { IMovie } from 'shared/types/movie.types'

const DiscoveryPage: NextPage<{ collections: ICollection[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Discovery movies"
			description="Discovery movies in excellent quality: legal, safe, without ads"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const movies = await MovieService.getMostPopularMovies()

		return {
			props: {
				movies,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
}

export default DiscoveryPage;
