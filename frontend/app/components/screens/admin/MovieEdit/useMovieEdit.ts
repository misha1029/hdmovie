import { getAdminUrl } from 'config/url.config'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'
import { MovieService } from 'services/movie.service'
import { getKeys } from 'utils/object/getKeys'
import { toastrError } from 'utils/toastrError/toastrError'
import { IMovieEditInput } from './movie-edit.interface'




export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	// setValue - для того что бы загрузить существующие данные в редактирующию форму поля филдов (что бы поля были заполненые)

	const { push, query } = useRouter() // push для перехада в нужный жанр а query - для пережода по id в нужный жанр

	const movieId = String(query.id)

	const { isLoading } = useQuery(
		['movie', movieId],
		() => MovieService.getById(movieId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastrError(error, 'Get movie')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		'update movie',
		(data: IMovieEditInput) => MovieService.update(movieId, data),
		{
			onError: (error) => {
				toastrError(error, 'Get movie')
			},
			onSuccess() {
				toastr.success('Update movie', 'update was successfull')
                push(getAdminUrl('movies'))
			},
		}
	)

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await mutateAsync(data)
	}

    return {onSubmit, isLoading}
}
