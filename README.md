# hotpack-compress
[hotpack](https://github.com/duhongwei/hotpack) plugin compress

compress html,css,js by "html-minifier",  "clean-css" and "uglify-es"

## usage
```bash
npm install @duhongwei/hotpack-compress
```

```js
import compress from '@duhongwei/hotpack-compress'

export default {
  plugin: [
    {
      name: 'compress',
      use: compress
    }
  ]
}
```
