import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/answers': {
        target:
          'http://ec2-43-201-23-173.ap-northeast-2.compute.amazonaws.com:8080/answers',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/answers/, ''),
      },
      '/answers/id': {
        target:
          'http://ec2-43-201-23-173.ap-northeast-2.compute.amazonaws.com:8080/answers/id',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/answers\/\d+/, '/answers'),
      },
    },
  },
  define: {
    global: {},
  },
});
