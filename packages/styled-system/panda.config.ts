import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@sky-ui/panda-preset'
import neutral from '@sky-ui/panda-preset/colors/neutral'

export default defineConfig({
  presets: [
    '@pandacss/preset-panda',
    createPreset({ accentColor: neutral, grayColor: neutral, radius: 'sm' }),
  ],
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  outdir: 'dist',
  jsxFramework: 'react',
  staticCss: {
    recipes: '*',
  },
})
