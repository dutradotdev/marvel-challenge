export type HeroItemProps = {
  item: {
    id: number
    name: string
    description?: string
    thumbnail?: {
      path?: string
      extension?: string
    }
  }
}

export type HeroProps = {
  id: number
  name: string
  description?: string
  thumbnail: {
    path?: string
    extension?: string
  }
}
