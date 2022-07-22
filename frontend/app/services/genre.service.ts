import { axiosClassic } from 'api/interceptors'
import axios from '../api/interceptors'
import { getGenresUrl } from 'config/api.config'
import { IGener } from 'shared/types/movie.types'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGener[]>(getGenresUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async deleteGenre(_id:string) {
        const result = confirm("Want to delete?");
        if (result){
            return axios.delete<string>(getGenresUrl(`/${_id}`))
        }
    }
}
