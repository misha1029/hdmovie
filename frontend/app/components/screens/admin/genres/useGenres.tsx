import { useDebounce } from 'components/layout/Sidebar/Search/SeachList/useDebounce'
import { getAdminUrl } from 'config/url.config'
import { useRouter } from 'next/router'
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
		(genreId: string) => GenreService.delete(genreId),
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

	const {push} = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create genre',
		() => GenreService.create(),
		{
			onError: (error) => {
				toastrError(error, 'create genre')
			},
            onSuccess: ({data:_id}) => {
                toastr.success('Create genre', 'create was successful')
                push(getAdminUrl(`genre/edit/${_id}`))
            }
		}
	)

    return useMemo(() => ({
        handleSearch, ...queryData, searchTerm, deleteAsync, createAsync
    }), [queryData,searchTerm, deleteAsync, createAsync ])
}
