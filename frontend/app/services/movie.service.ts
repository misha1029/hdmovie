import { axiosClassic } from 'api/interceptors'
import { IMovieEditInput } from 'components/screens/admin/MovieEdit/movie-edit.interface'
import { getMoviesUrl } from 'config/api.config'
import { IMovie } from 'shared/types/movie.types'

import axios from '../api/interceptors'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

	async getByGenres(genreIds: string[]) {
		return axiosClassic.post<IMovie[]>(getMoviesUrl('/by-genres'), { genreIds })
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<IMovie>(getMoviesUrl(`/by-slug/${slug}`))
	},

	async getByActors(actorId: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`))
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl('/most-popular')
		)
		return movies
	},
	async deleteMovie(_id: string) {
		const result = confirm('Want to delete?')
		if (result) {
			return axios.delete<string>(getMoviesUrl(`/${_id}`))
		}
	},
	async create() {
		return axios.post<string>(getMoviesUrl('/'))
	},

	async getById(_id: string) {
		return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	},

	async update(_id: string, data: IMovieEditInput) {
		return axios.put<string>(getMoviesUrl(`/${_id}`), data)
	},
	async updateCountOpened(slug: string) {
		return axiosClassic.post<string>(getMoviesUrl(`/update-count-opened`), { slug })
	},
}
