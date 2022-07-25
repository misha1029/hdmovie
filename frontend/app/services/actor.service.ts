import { axiosClassic } from 'api/interceptors'
import axios from '../api/interceptors'
import { getActorsUrl } from 'config/api.config'
import { IActor } from 'shared/types/movie.types'
import { IActorEditInput } from 'components/screens/admin/ActorEdit/actor-edit.interface'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IActor[]>(getActorsUrl(``), {
			params: searchTerm ? { searchTerm } : {},
		})
	},
	async deleteActor(_id:string) {
        const result = confirm("Want to delete?");
        if (result){
            return axios.delete<string>(getActorsUrl(`/${_id}`))
        }
    },

	async getById(_id: string) {
		return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
	},

	async update(_id: string, data: IActorEditInput) {
		return axios.put<string>(getActorsUrl(`/${_id}`), data)
	},

	async create() {
		return axios.post<string>(getActorsUrl('/'))
	},
}
