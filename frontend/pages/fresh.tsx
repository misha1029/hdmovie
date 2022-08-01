import { Catalog } from 'components/ui/catalog-movie/Catalog'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { MovieService } from 'services/movie.service'
import { IMovie } from 'shared/types/movie.types'

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<Catalog
			movies={movies || []}
			title="Fresh movies"
			description="New movies and series in excellent quality: legal, safe, without ads"
		/>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()

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

export default FreshPage
