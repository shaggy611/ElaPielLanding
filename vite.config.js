import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        minify: false,
        minifySyntax: false,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                'privacy-policy': resolve(__dirname, 'public/privacy-policy/index.html'),
                'public-offer': resolve(__dirname, 'public/public-offer/index.html')
                // pages_2: resolve(__dirname, 'pages/chief_collection_manager_1.html'),
            },
            external: [
                /^node:.*/,
            ]
        }
    }
})