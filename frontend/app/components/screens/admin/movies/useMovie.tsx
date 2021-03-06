import { useDebounce } from 'components/layout/Sidebar/Search/SeachList/useDebounce'
import { getAdminUrl } from 'config/url.config'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { MovieService } from 'services/movie.service'

import { getGenresList } from 'utils/movie/getGenresEach'
import { toastrError } from 'utils/toastrError/toastrError'

import { ITableItem } from '../AdminTable/adminTable.interface'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['movie list', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
            
				data.map(
					(movie): ITableItem => ({
						_id: movie._id,
						editUrl: getAdminUrl(`movie/edit/${movie._id}`),
						items: [movie.title, getGenresList(movie.genres), String(movie.rating)],
                        
					})
				), 
			onError: (error) => {
				toastrError(error, 'Movie list')
			},
		}
        
	)
    

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete movie',
		(movieId: string) => MovieService.deleteMovie(movieId),
		{
			onError: (error) => {
				toastrError(error, 'delete movie')
			},
            onSuccess: () => {
                toastr.success('Delete movie', 'delete was successful')
                queryData.refetch()
            }
		}
	)

    return useMemo(() => ({
        handleSearch, ...queryData, searchTerm, deleteAsync
    }), [queryData,searchTerm, deleteAsync ])
}
