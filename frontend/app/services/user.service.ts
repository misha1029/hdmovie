import { axiosClassic } from 'api/interceptors'
import axios from '../api/interceptors'

import { getUsersUrl } from 'config/api.config'
import { IMovie } from 'shared/types/movie.types'
import { IUser } from 'shared/types/user.types'

export const UserService = {
	async getAll(searchTerm?: string) {
		return axios.get<IUser[]>(getUsersUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		})
	},

    async deleteUser(_id:string) {
        const  result = confirm("Want to delete?");
        if (result){
            return axios.delete<string>(getUsersUrl(`/${_id}`))
        }
    }
}
