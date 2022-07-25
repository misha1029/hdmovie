import { useDebounce } from 'components/layout/Sidebar/Search/SeachList/useDebounce'
import { getAdminUrl } from 'config/url.config'
import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { ActorService } from 'services/actor.service'
import { convertMongoDate } from 'utils/data/convertMongoDate'
import { toastrError } from 'utils/toastrError/toastrError'

import { ITableItem } from '../AdminTable/adminTable.interface'

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['actor list', debouncedSearch],
		() => ActorService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
            
				data.map(
					(actor): ITableItem => ({
						_id: actor._id,
						editUrl: getAdminUrl(`actor/edit/${actor._id}`),
						items: [actor.name, String(actor.countMovies)],
					})
				), 
			onError: (error) => {
				toastrError(error, 'Actor list')
			},
		}
        
	)
    

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { mutateAsync: deleteAsync } = useMutation(
		'delete actor',
		(actorId: string) => ActorService.deleteActor(actorId),
		{
			onError: (error) => {
				toastrError(error, 'delete actor')
			},
            onSuccess: () => {
                toastr.success('Delete actor', 'delete was successful')
                queryData.refetch()
            }
		}
	)

	const {push} = useRouter()

	const { mutateAsync: createAsync } = useMutation(
		'create actor',
		() => ActorService.create(),
		{
			onError: (error) => {
				toastrError(error, 'create actor')
			},
            onSuccess: ({data:_id}) => {
                toastr.success('Create actor', 'create was successful')
                push(getAdminUrl(`actor/edit/${_id}`))
            }
		}
	)

    return useMemo(() => ({
        handleSearch, ...queryData, searchTerm, deleteAsync, createAsync
    }), [queryData,searchTerm, deleteAsync, createAsync ])
}
