import { getAdminUrl } from 'config/url.config'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { GenreService } from 'services/genre.service'
import { getKeys } from 'utils/object/getKeys'
import { toastrError } from 'utils/toastrError/toastrError'

import { IGenerEditInput } from './gener-edit.interface'

export const useGenerEdit = (setValue: UseFormSetValue<IGenerEditInput>) => {
	// setValue - для того что бы загрузить существующие данные в редактирующию форму поля филдов (что бы поля были заполненые)

	const { push, query } = useRouter() // push для перехада в нужный жанр а query - для пережода по id в нужный жанр

	const genreId = String(query.id)

	const { isLoading } = useQuery(
		['genre', genreId],
		() => GenreService.getById(genreId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastrError(error, 'Get genge')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update genre',
		(data: IGenerEditInput) => GenreService.update(genreId, data),
		{
			onError: (error) => {
				toastrError(error, 'Get genge')
			},
			onSuccess() {
				toastr.success('Update genre', 'update was successfull')
                push(getAdminUrl('genres'))
			},
		}
	)

	const onSubmit: SubmitHandler<IGenerEditInput> = async (data) => {
		await mutateAsync(data)
	}

    return {onSubmit, isLoading}
}
