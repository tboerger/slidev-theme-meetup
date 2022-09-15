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
---
```

## Examples

### Intro

```md
---
layout: intro
---
```

![intro slide](./example-export/001.png)

### Presenter

```md
---
layout: presenter
photo: /images/tboerger.jpg
---
```

![presenter slide](./example-export/002.png)

### Twocols

```md
---
layout: twocols
---
```

![twocols slide](./example-export/003.png)

### Center

```md
---
layout: center
---
```

![center slide](./example-export/004.png)

### Cover

```md
---
layout: cover
---
```

![cover slide](./example-export/005.png)

### Default

```md
---
layout: default
---
```

![default slide](./example-export/006.png)

### Qrcode

```md
---
layout: qrcode
url: https://example.com
---
```

![qrcode slide](./example-export/007.png)

## Components

### CornerCurves

Just curves shown within the slides.

```vue
<CornerCurves class="absolute left-0 top-0 transform rotate-90" />
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

[slidev]: https://github.com/slidevjs/slidev
[unicorn]: https://github.com/Dawntraoz/slidev-theme-unicorn/
[purplin]: https://github.com/moudev/slidev-theme-purplin/
[penguin]: https://github.com/alvarosabu/slidev-theme-penguin/
[themes]: https://sli.dev/themes/use.html
