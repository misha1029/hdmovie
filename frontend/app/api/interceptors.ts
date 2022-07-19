import axios from 'axios'
import Cookies from 'js-cookie'
import { removeTokensStorage } from 'services/auth/auth.helper'
import { AuthService } from 'services/auth/auth.services'

import { API_URL } from '../config/api.config'

import { errorCatch } from './api.helper'

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

export const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
})

instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('accessToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})
// Обычный запрос куда в хеддер мы добовляем токен авторизации, для того чтобы сервер понял 
//что мы авторизованы и что бы серв проверил нашего юзера

instance.interceptors.response.use(
	(config) => config,
	async (error) => {  // <=== обробатываем ссынарий ощибки 
		const originalRequest = error.config
		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provider') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true
			try{
				await AuthService.getNewTokens()
				return instance.request(originalRequest)
			}catch{
				if(errorCatch(error) === 'jwwt expired') removeTokensStorage()
			}
		}

		throw error
	}
)

export default instance;
