import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://ec2-13-209-35-180.ap-northeast-2.compute.amazonaws.com:8080`,
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, ''),
      },
      // '/createQuestion': {
      //   target:
      //     'http://ec2-13-209-35-180.ap-northeast-2.compute.amazonaws.com:8080/question/ask',
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: path => path.replace(/^\/createQuestion/, ''),
      // },
      // '/QuestionList': {
      //   target:
      //     'http://ec2-13-209-35-180.ap-northeast-2.compute.amazonaws.com:8080/?page=1&size=15',
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: path => path.replace(/^\/QuestionList/, ''),
      // },
      // '/answers': {
      //   target:
      //     'http://ec2-13-209-35-180.ap-northeast-2.compute.amazonaws.com:8080/answers',
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: path => path.replace(/^\/answers/, ''),
      // },
      // '/answers/id': {
      //   target:
      //     'http://ec2-13-209-35-180.ap-northeast-2.compute.amazonaws.com:8080/answers/id',
      //   changeOrigin: true,
      //   secure: false,
      //   rewrite: path => path.replace(/^\/answers\/\d+/, '/answers'),
      // },
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
