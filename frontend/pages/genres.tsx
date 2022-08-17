import { Collections } from 'components/screens/collections/Collections'
import { ICollection } from 'components/screens/collections/collections.interface'

import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { GenreService } from 'services/genre.service'

const GenresPage: NextPage<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		/* <Collections collections = {collections || []}/> */
		<div>1111</div>
		
	)
}

/* export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections} = await GenreService.getCollections()

		console.log()

		return {
			props: {
				collections,
			},
		}
	} catch (error) {
		return {
			notFound: true,
		}
	}
} */

export default GenresPage;
