export interface Post {
  id: string
  date?: string
  title: string
  snippet?: string
  body: string
}

export interface DatedPost extends Post {
  date: string
}
