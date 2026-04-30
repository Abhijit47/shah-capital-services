import { devtools } from '@tanstack/devtools-vite'
import { defineConfig } from 'vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import netlify from '@netlify/vite-plugin-tanstack-start' // ← add this

import babel from '@rolldown/plugin-babel'
import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    netlify(), // ← add this (anywhere in the array is fine)
    tanstackStart(),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
})

export default config
