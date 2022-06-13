import axios from 'axios'
import {
  tokenGetAccess,
  tokenGetAccessSession,
  tokenRefreshItems,
} from './token'
import { BASE_API_URL } from '../utils/constants'

export const $api = axios.create({
  baseURL: BASE_API_URL,
})

$api.interceptors.request.use(
  (config) => {
    const token = tokenGetAccess()
    const sessionToken = tokenGetAccessSession()
    if ((token && token !== '') || (sessionToken && sessionToken !== '')) {
      config.headers.Authorization =
        `Bearer ${token}` ||
        (config.headers.Authorization = `Bearer ${sessionToken}`)
    }
    return config
  },
  (error) => Promise.reject(error)
)

$api.interceptors.response.use(
  async (config) => config,
  async (error) => {
    if (error?.response?.status === 401) {
      try {
        await tokenRefreshItems()
        return axios({
          ...error.config,
          headers: {
            Authorization: `Bearer ${tokenGetAccess()}`,
          },
        })
      } catch (e) {
        delete $api.defaults.headers.common['Authorization']
        // await tokenRemoveItems()
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)
