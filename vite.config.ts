import { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    define: {
        __CWD__: JSON.stringify(process.cwd()),
    },
    resolve: {
        alias: {
            '@homework-task': resolve(__dirname, './src'),
        },
    },
});
