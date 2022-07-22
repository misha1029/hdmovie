import { axiosClassic } from 'api/interceptors'
import { IGenerEditInput } from 'components/screens/admin/GenerEdit/gener-edit.interface'
import { getGenresUrl } from 'config/api.config'
import { IGener } from 'shared/types/movie.types'

import axios from '../api/interceptors'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGener[]>(getGenresUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getById(_id: string) {
		return axios.get<IGenerEditInput>(getGenresUrl(`/${_id}`))
	},

	async delete(_id: string) {
		const result = confirm('Want to delete?')
		if (result) {
			return axios.delete<string>(getGenresUrl(`/${_id}`))
		}
	},
	
	async update(_id: string, data: IGenerEditInput) {
		return axios.put<string>(getGenresUrl(`/${_id}`), data)
	},
}
