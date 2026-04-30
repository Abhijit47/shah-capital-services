import { devtools } from '@tanstack/devtools-vite'
import { defineConfig } from 'vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import babel from '@rolldown/plugin-babel'
import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tanstackStart(),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
})

export default config
