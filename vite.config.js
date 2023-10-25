import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        minify: false,
        minifySyntax: false,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                'privacy-policy': resolve(__dirname, 'privacy-policy.html'),
                'public-offer': resolve(__dirname, 'public-offer.html'),
                'eng': resolve(__dirname, 'eng/index.html')
                // pages_2: resolve(__dirname, 'pages/chief_collection_manager_1.html'),
            },
            external: [
                /^node:.*/,
            ]
        }
    }
})