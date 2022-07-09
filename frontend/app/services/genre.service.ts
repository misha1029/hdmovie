import { axiosClassic } from 'api/interceptors'
import axios from 'axios'
import { getGenresUrl } from 'config/api.config'
import { IGener } from 'shared/types/movie.types'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGener[]>(getGenresUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
}
