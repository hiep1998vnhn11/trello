export interface DockIem {
  pathPrefix: string
  icon?: string
}
export const dockApp: DockIem[] = [
  { pathPrefix: '/app', icon: 'app' },
  { pathPrefix: '/mp3', icon: 'app' },
  { pathPrefix: '/trello', icon: 'app' },
  { pathPrefix: '/discord', icon: 'app' },
]
