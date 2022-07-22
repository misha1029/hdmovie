import { useDebounce } from 'components/layout/Sidebar/Search/SeachList/useDebounce'
import { getAdminUrl } from 'config/url.config'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { GenreService } from 'services/genre.service'
import { convertMongoDate } from 'utils/data/convertMongoDate'
import { toastrError } from 'utils/toastrError/toastrError'

import { ITableItem } from '../AdminTable/adminTable.interface'

export const useGenres = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['genre list', debouncedSearch],
		() => GenreService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
            
				data.map(
					(genre): ITableItem => ({
						_id: genre._id,
						editUrl: getAdminUrl(`genre/edit/${genre._id}`),
						items: [genre.name, genre.slug],
                        
					})
				), 
			onError: (error) => {
				toastrError(error, 'Genre list')
			},
		}
        
	)
    

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete genre',
		(genreId: string) => GenreService.deleteGenre(genreId),
		{
			onError: (error) => {
				toastrError(error, 'delete genre')
			},
            onSuccess: () => {
                toastr.success('Delete genre', 'delete was successful')
                queryData.refetch()
            }
		}
	)

    return useMemo(() => ({
        handleSearch, ...queryData, searchTerm, deleteAsync
    }), [queryData,searchTerm, deleteAsync ])
}
