import { withInstall } from '../install'

import textarea from './src/Textarea.vue'
import card from './src/Card.vue'
import dropdown from './src/Dropdown/src/Dropdown.vue'
import modal from './src/Modal/index.vue'
import tabs from './src/Tab'
import avatar from './src/Avatar.vue'

export const Textarea = withInstall(textarea)
export const Card = withInstall(card)
export const Dropdown = withInstall(dropdown)
export const Modal = withInstall(modal)
export const Tabs = withInstall(tabs)
export const Avatar = withInstall(avatar)

export * from './src/Tab/src/types'
