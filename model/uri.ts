export const uri = (strings: TemplateStringsArray, ...components: string[]) => {
  const queue = Array.from(strings)
  let result = queue.shift()
  while (components.length) {
    result += encodeURIComponent(components.shift())
    result += queue.shift()
  }
  return result
}
