import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        // https://cn.vitejs.dev/config/#resolve-alias
        alias: {
            // 设置别名
            '@': path.resolve(__dirname, './src')
        },
    },
})
