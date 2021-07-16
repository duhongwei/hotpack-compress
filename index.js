import jsProvider from 'uglify-es'
import cssProvider from 'clean-css'
import { extname } from 'path'
import htmlProvider from 'html-minifier';
const minify = htmlProvider.minify
export default async function ({ debug, opt }) {
  if (this.isDev()) return;
  this.on('compress', (files) => {
    debug('on event beforeUpload')
    for (let file of files) {
      if (/\.min\.(js|css|html|htm)$/.test(file.key)) {
        continue
      }
      if (!/\.(js|css|html|htm)$/.test(file.key)) {
        continue;
      }
      if (file.meta.minified) continue
      
      let result = null
      debug(`compress ${file.key}`)
      switch (extname(file.key)) {
        case '.js':
          result = jsProvider.minify(file.content, opt.js)
          if (!result.code) {
            throw result.error
          }
          result = result.code
          break;
        case '.css':
          //todo record error
          result = new cssProvider({ compatibility: 'ie9' }).minify(file.content)
          result = result.styles
          break
        case '.html':
          result = minify(file.content, {
            removeAttributeQuotes: true,
            collapseWhitespace: true
          });
          break;
        default:
          break
      }
      file.content = result
    }
  }, true)
}