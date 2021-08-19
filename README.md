# Hotpack-compress
[hotpack](https://github.com/duhongwei/hotpack) plugin compress

Contains three modules

- [uglify-js](https://github.com/mishoo/UglifyJS#readme)
- [html-minifier](https://github.com/kangax/html-minifier)
- [clean-css](https://github.com/clean-css/clean-css)

## Usage
```bash
npm install --save-dev @duhongwei/hotpack-compress
```
```js
import compress from '@duhongwei/hotpack-compress'

export default {
  plugin: [
    {
      name: 'compress',
      use: compress,
      opt:{
        //Optional, default is {},options of uglify-js
        js:{},
        //Optional, default is { removeAttributeQuotes: true,collapseWhitespace: true }
        html:{  removeAttributeQuotes: true,collapseWhitespace: true},
        //Optional, default is {compatibility: 'ie9' },options of clean-css 
        css:{compatibility: 'ie9'},
      }
    }
  ]
}
```
