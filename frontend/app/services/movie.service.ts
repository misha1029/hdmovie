import { axiosClassic } from 'api/interceptors'
import axios from 'axios'
import { getMoviesUrl } from 'config/api.config'
import { IMovie } from 'shared/types/movie.types'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
}
