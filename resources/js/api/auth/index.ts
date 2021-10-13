import { defHttp } from '/@/utils/axios'
import { LoginParams, LoginResponse, UserInfo } from './model'
const indexApi = '/auth'
export const loginApi = (params: LoginParams) =>
  defHttp.post<LoginResponse>({ url: indexApi + '/login', params })

export const getUserApi = () => defHttp.get<UserInfo>({ url: indexApi + '/me' })
