# data-animevsub-ext

[![Test & Release](https://github.com/tachibana-shin/data-animevsub-ext/actions/workflows/build.yaml/badge.svg?branch=master)](https://github.com/tachibana-shin/data-animevsub-ext/actions/workflows/build.yaml)

## Tutorial

### Redirect blocked domain names

Blocked domain names will be allowed to be registered with 2 file types:

- `.ts`: this is a Typescript file that you have to comply with using the `defineRule` function.
- `.txt`: this file accepts the syntax of `AdBlock Plus List`

#### Example

www.google.com.ts

```ts
import { defineRule } from "../scripts/defineRule"

export default defineRule({
  condition: {
    urlFilter: "||www.google.com.vn/*",
    resourceTypes: [
      "main_frame",
      "sub_frame",
      "stylesheet",
      "script",
      "image",
      "object",
      "xmlhttprequest",
      "other"
    ]
  },
  priority: 1
})
```

rules.txt

```txt
! redirect from bing.com.vn by script and style
||www.bing.com.vn^$stylesheet,script

! redirect all from google.com
||google.com^$all
```

### Available domain

transform.json
- `scheme` is http version
- `host` new host redirect
```json
{
  "scheme": "https",
  "host": "animevietsub.cc"
}
```
