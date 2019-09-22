const Path = require('path')
const Url = require('url')

const Cheerio = require('cheerio')
const { highlight, highlightAuto } = require('highlight.js')

const fm = require('front-matter')
const { format } = require('date-fns')
const marked = require('marked')

const SITE_URL_PLACEHOLER = 'http://site_url_placeholder/'

module.exports = function(source) {
  const path = this.resourcePath
  const id = Path.basename(path, '.md')

  const { attributes, body } = fm(source)

  if (!attributes.title) {
    throw new Error(`post without a title at [${path}]`)
  }

  const $ = Cheerio.load(marked(body))
  const $each = (selector, fn) => {
    $(selector).each((_, el) => {
      fn($(el))
    })
  }

  // highlight multi-line code blocks
  $each('pre > code', $el => {
    const classes = ($el.attr('class') || '')
      .split(' ')
      .map(c => c.trim())
      .filter(c => !!c)

    const language = classes
      .filter(c => c.startsWith('language-'))
      .map(c => c.slice('language-'.length))
      .shift()

    const highlighted = language
      ? highlight(language, $el.text())
      : highlightAuto($el.text())

    $el
      .html(highlighted.value)
      .parent()
      .addClass('multi-line-code-block')
  })

  // stylize images in their own paragraph
  $each('p > img', $img => {
    if ($img.parent().children().length === 1) {
      $img.parent().addClass('single-image-paragraph')
    }
  })

  // resolve relative image source urls
  $each('img[src]', $el => {
    $el.attr('src', Url.resolve(SITE_URL_PLACEHOLER, $el.attr('src')))
  })

  // resolve relative link href urls
  $each('a[href]', $el => {
    $el.attr('href', Url.resolve(SITE_URL_PLACEHOLER, $el.attr('href')))
  })

  return `export default ${JSON.stringify(
    {
      id,
      date: attributes.date ? format(attributes.date, 'yyyy-MM-dd') : undefined,
      title: attributes.title,
      snippet: attributes.snippet ? marked(attributes.snippet) : undefined,
      body: $.html(),
    },
    null,
    2,
  )};`
}
