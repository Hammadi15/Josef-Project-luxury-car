import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

// Link previews (WhatsApp, Discord, iMessage...) need the full address of the preview picture.
// Netlify gives the site's address in the URL variable during the build, so we fill it in here.
function siteUrl(): Plugin {
  const url = (process.env.URL ?? '').replace(/\/$/, '')
  return {
    name: 'site-url',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', url),
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), siteUrl()],
})
