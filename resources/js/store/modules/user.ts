import { router } from '/@/router'
import { ActionDefaultArg } from './../actions'
import { loginApi, getUserApi } from '/@/api/auth'
import type { LoginParams, UserInfo } from '/@/api/auth/model'
import { getAuthCache, setAuthCache, getToken } from '/@/utils/auth'
import { TOKEN_KEY, USER_INFO_KEY } from '/@/enums/cacheEnum'
type UserState = {
  currentUser: Nullable<UserInfo>
  roleList: string[]
  token: Nullable<string>
}
const state: () => UserState = () => ({
  currentUser: getAuthCache(USER_INFO_KEY) || null,
  roleList: [],
  token: (getToken() as string) || null,
})
const getters = {
  isLogin: (state: UserState): boolean => state.currentUser !== null,
  currentUser: (state: UserState): Nullable<UserInfo> => state.currentUser,
}

const actions = {
  async doLogin({ commit }: ActionDefaultArg, params: LoginParams) {
    try {
      const { access_token, expires_in } = await loginApi(params)
      setAuthCache(TOKEN_KEY, access_token)
      const userInfo = await getUserApi()
      commit('SET_USER', userInfo)
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  },
}

const mutations = {
  SET_STATE: function (state: any, [key, value]: [string, any]) {
    state[key] = value
  },
  SET_USER: function (state: UserState, userInfo: UserInfo) {
    state.currentUser = userInfo
    setAuthCache(USER_INFO_KEY, userInfo)
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
