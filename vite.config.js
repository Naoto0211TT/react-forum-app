import path from 'path'
import { fileURLToPath } from 'url'

// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import env from 'vite-plugin-env-compatible'

const fileName = fileURLToPath(import.meta.url)
const dirName = path.dirname(fileName)

export default defineConfig({
  envDir: `${dirName}/env`,
  plugins: [
    react(),
    checker({
      eslint: {
        lintCommand: 'eslint "src/**/*.{js,jsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint "src/**/*.css"',
      },
    }),
    env({ prefix: 'VITE', mountedPath: 'process.env' }),
  ],
  resolve: {
    alias: {
      '@/': `${dirName}/src/`,
    },
  },
  server: {
    open: true,
    port: 8000,
  },
})
