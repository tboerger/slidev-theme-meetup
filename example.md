---
theme: ./
layout: intro
lineNumbers: false
themeConfig:
  title: Welcome to Slidev
  twitter: example
  github: example
---
# Welcome to Slidev

---
layout: presenter
photo: https://images.unsplash.com/photo-1522075469751-3a6694fb2f61
---
# Max Mustermann

Software Engineer @ Mustermann GmbH

* Golang
* Music
* Cinema
* Technics

---
layout: twocols
---
# Twocols Example

::left::
- This is the left column
- Sed diam voluptua

::right::
- This is the right column
- Lorem ipsum dolor sit amet
- Consetetur sadipscing elitr

---
layout: center
---
# This is a centered slide

```ts
const aspectRatioPlugin = plugin(({ addUtilities }) => {
  const newUtilities = {
    '.aspect-none': {
      aspectRatio: 'none',
    },
    '.aspect-16-9': {
      aspectRatio: '16/9',
    },
    '.aspect-4-3': {
      aspectRatio: '4/3',
    },
    '.aspect-1-1': {
      aspectRatio: '1/1',
    },
  }
  addUtilities(newUtilities, ['responsive', 'hover'])
})
```

---
layout: cover
---
# This is a cover

---
layout: window
---
# Console

::window::
```ts
const aspectRatioPlugin = plugin(({ addUtilities }) => {
  const newUtilities = {
    '.aspect-none': {
      aspectRatio: 'none',
    },
    '.aspect-16-9': {
      aspectRatio: '16/9',
    },
    '.aspect-4-3': {
      aspectRatio: '4/3',
    },
    '.aspect-1-1': {
      aspectRatio: '1/1',
    },
  }
  addUtilities(newUtilities, ['responsive', 'hover'])
})
```

---
layout: default
---
# What is Slidev?

Slidev is a slides maker and presenter designed for developers, consist of the following features

- 📝 **Text-based** - focus on the content with Markdown, and then style them later
- 🎨 **Themable** - theme can be shared and used with npm packages
- 🧑‍💻 **Developer Friendly** - code highlighting, live coding with autocompletion
- 🤹 **Interactive** - embedding Vue components to enhance your expressions
- 🎥 **Recording** - built-in recording and camera view
- 📤 **Portable** - export into PDF, PNGs, or even a hostable SPA
- 🛠 **Hackable** - anything possible on a webpage

---
layout: qrcode
url: https://example.com
---
# Link to slides
