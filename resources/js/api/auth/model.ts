export interface LoginParams {
  username: string
  password: string
}

export interface LoginResponse {
  access_token: string
  expires_in: number
}

export interface UserInfo {
  email: string
  full_name: string
}
