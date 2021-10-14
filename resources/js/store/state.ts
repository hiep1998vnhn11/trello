export type AppState = {
  darkMode: boolean
  appButton: boolean
  sidebar: boolean
}
export default {
  darkMode: localStorage.getItem('DARK_MODE') === 'true',
  appButton: false,
  sidebar: false,
} as AppState
