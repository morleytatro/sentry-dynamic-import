import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dynamicImport from 'vite-plugin-dynamic-import';
import { sentryVitePlugin } from '@sentry/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dynamicImport(), sentryVitePlugin({
    org: "gsretrofit",
    project: "javascript-react",
    include: "./dist",
    authToken: "fake-token-here",
    release: '1.0.0'
  })],
  build: {
    sourcemap: true,
  }
})
