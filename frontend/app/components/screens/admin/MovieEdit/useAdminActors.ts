import { IOption } from 'components/ui/select/select.interface'
import { useQuery } from 'react-query'
import { ActorService } from 'services/actor.service'
import { toastrError } from 'utils/toastrError/toastrError'

export const useAdminActors = () => {
	const queryData = useQuery('List actor', () => ActorService.getAll(), {
		select: ({ data }) =>
			data.map(
				(actor): IOption => ({
					label: actor.name,
					value: actor._id,
				})
			),
		onError: (error) => {
			toastrError(error, 'Actor list')
		},
	})

	return queryData
}
