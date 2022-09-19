# Slidev Theme Meetup

[![NPM version](https://img.shields.io/npm/v/slidev-theme-meetup?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-meetup) [![Build](https://github.com/tboerger/slidev-theme-meetup/actions/workflows/build.yml/badge.svg)](https://github.com/tboerger/slidev-theme-meetup/actions/workflows/build.yml)

A theme used for talks on meetups for [Slidev][slidev]. Generally it's a
combination of different themes like [Unicorn][unicorn], [Purplin][purplin] and
[Penguin][penguin] where I took different snippets from.

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will
prompt you to install the theme automatically. Learn more about how to use a
theme within the [documentation][themes].

```md
---
theme: meetup
layout: intro
lineNumbers: false
themeConfig:
  title: Welcome to Slidev
  twitter: example
  github: example
---
```

This themes requires additional packages beside the theme itself and the above
configuration:

```console
npm install vite-svg-loader qrious
```

Finally you also got to provide a customized `vite.config.js` as this is
required to load the used SVGs:

```ts
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [
    svgLoader(),
  ],
})
```

## Examples

### Intro

```md
---
layout: intro
---
```

![intro slide](https://raw.githubusercontent.com/tboerger/slidev-theme-meetup/master/example-export/001.png)

### Presenter

```md
---
layout: presenter
photo: /images/tboerger.jpg
---
```

![presenter slide](https://raw.githubusercontent.com/tboerger/slidev-theme-meetup/master/example-export/002.png)

### Twocols

```md
---
layout: twocols
---
```

![twocols slide](https://raw.githubusercontent.com/tboerger/slidev-theme-meetup/master/example-export/003.png)

### Center

```md
---
layout: center
---
```

![center slide](https://raw.githubusercontent.com/tboerger/slidev-theme-meetup/master/example-export/004.png)

### Cover

```md
---
layout: cover
---
```

![cover slide](https://raw.githubusercontent.com/tboerger/slidev-theme-meetup/master/example-export/005.png)

### Window

```md
---
layout: window
---
```

![window slide](https://raw.githubusercontent.com/tboerger/slidev-theme-meetup/master/example-export/006.png)

### Default

```md
---
layout: default
---
```

![default slide](https://raw.githubusercontent.com/tboerger/slidev-theme-meetup/master/example-export/007.png)

### Qrcode

```md
---
layout: qrcode
url: https://example.com
---
```

![qrcode slide](https://raw.githubusercontent.com/tboerger/slidev-theme-meetup/master/example-export/008.png)

## Components

### CornerCurves

Just curves shown within the slides.

```vue
<CornerCurves class="absolute left-0 top-0 transform rotate-90" />
```

### WindowConsole

Display content in a terminal window.

```vue
<WindowConsole class="rounded-lg shadow-lg object-cover z-10">
  Content
</WindowConsole>
```

### LayoutHeader

General header part of every slide.

```vue
<LayoutHeader />
```

### LayoutFooter

General footer part of every slide.

```vue
<LayoutFooter />
```

## Security

If you find a security issue please contact thomas@boerger.ws first.

## Contributing

Fork -> Patch -> Push -> Pull Request

## Authors

*   [Thomas Boerger](https://github.com/tboerger)

## License

[CC-BY-SA-4.0](http://creativecommons.org/licenses/by-sa/4.0/)

## Copyright

```console
Copyright (c) 2022 Thomas Boerger <thomas@boerger.ws>
```

[slidev]: https://github.com/slidevjs/slidev
[unicorn]: https://github.com/Dawntraoz/slidev-theme-unicorn/
[purplin]: https://github.com/moudev/slidev-theme-purplin/
[penguin]: https://github.com/alvarosabu/slidev-theme-penguin/
[themes]: https://sli.dev/themes/use.html
