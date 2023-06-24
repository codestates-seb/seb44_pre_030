import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://ec2-3-39-231-14.ap-northeast-2.compute.amazonaws.com:8080`,
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, ''),
      },
      // '/comments': {
      //   target:
      //     'http://ec2-13-209-35-180.ap-northeast-2.compute.amazonaws.com:8080/comments',
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: path => path.replace(/^\/comments/, ''),
      // },
      // '/comments/id': {
      //   target:
      //     'http://ec2-13-209-35-180.ap-northeast-2.compute.amazonaws.com:8080/comments/id',
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: path => path.replace(/^\/comments\/\d+/, '/comments'),
      // },
      // '/question/:id': {
      //   target: `http://ec2-13-209-35-180.ap-northeast-2.compute.amazonaws.com:8080/question/:id`,
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: path => path.replace(/^\/question\/\d+/, '/question/:id'),
      // },
    },
  },
  define: {
    global: {},
  },
});
