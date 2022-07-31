import { IOption } from 'components/ui/select/select.interface'
import { useQuery } from 'react-query'
import { GenreService } from 'services/genre.service'
import { toastrError } from 'utils/toastrError/toastrError'

export const useAdminGenres= () => {
	const queryData = useQuery('List genre', () => GenreService.getAll(), {
		select: ({ data }) =>
			data.map(
				(genre): IOption => ({
					label: genre.name,
					value: genre._id,
				})
			),
		onError: (error) => {
			toastrError(error, 'Actor list')
		},
	})

	return queryData
}
