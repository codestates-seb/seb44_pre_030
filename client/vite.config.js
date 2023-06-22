import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {

      '/createQuestion':{
        target:'http://ec2-13-209-35-180.ap-northeast-2.compute.amazonaws.com:8080/question/ask',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/createQuestion/, ''),
      },
      '/QuestionList':{
        target:'http://ec2-13-209-35-180.ap-northeast-2.compute.amazonaws.com:8080/?page=1&size=15',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/QuestionList/, ''),
      },
      '/QuestionDetail':{
        target:'http://ec2-13-209-35-180.ap-northeast-2.compute.amazonaws.com:8080/question/id',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/QuestionDetail\/\d+/, ''),
      },
      '/answers': {
        target:
          'http://ec2-43-201-23-173.ap-northeast-2.compute.amazonaws.com:8080/answers',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/QuestionList/, ''),
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
