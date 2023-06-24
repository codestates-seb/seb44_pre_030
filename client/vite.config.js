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
      '/members': {
        //#1. axios라이브러리 등으로 http 요청인데 api로 시작하면,
        target: 'https://3f52-175-123-6-225.ngrok-free.app', //#2. 이쪽 주소로 매핑하여 백그라운드로 보내라.
        changeOrigin: true,
        rewrite: path => path.replace('/members', ''),
        secure: false,
        ws: true,
      },
    },
  },
  define: {
    global: {},
  },
});
