import { defineConfig, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Nunito',
        mono: 'Fira Code',
        title: 'Georgia',
      },
    }),
  ],
})
