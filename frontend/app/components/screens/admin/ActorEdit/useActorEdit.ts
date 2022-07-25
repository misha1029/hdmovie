import { getAdminUrl } from 'config/url.config'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { ActorService } from 'services/actor.service'
import { getKeys } from 'utils/object/getKeys'
import { toastrError } from 'utils/toastrError/toastrError'
import { IActorEditInput } from './actor-edit.interface'



export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	// setValue - для того что бы загрузить существующие данные в редактирующию форму поля филдов (что бы поля были заполненые)

	const { push, query } = useRouter() // push для перехада в нужный жанр а query - для пережода по id в нужный жанр

	const actorId = String(query.id)

	const { isLoading } = useQuery(
		['actor', actorId],
		() => ActorService.getById(actorId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastrError(error, 'Get actor')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update actor',
		(data: IActorEditInput) => ActorService.update(actorId, data),
		{
			onError: (error) => {
				toastrError(error, 'Get actor')
			},
			onSuccess() {
				toastr.success('Update actor', 'update was successfull')
                push(getAdminUrl('actors'))
			},
		}
	)

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await mutateAsync(data)
	}

    return {onSubmit, isLoading}
}
