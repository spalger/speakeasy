declare module '*.md' {
  const value: {
    id: string
    date?: string
    title: string
    snippet?: string
    body: string
  }

  export default value
}
