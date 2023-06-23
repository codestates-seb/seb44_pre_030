import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  server: {
      proxy: {
        '/members': {  //#1. axios라이브러리 등으로 http 요청인데 api로 시작하면,
          target: 'https://3f52-175-123-6-225.ngrok-free.app',  //#2. 이쪽 주소로 매핑하여 백그라운드로 보내라.
          changeOrigin: true,
          rewrite: (path) => path.replace('/members', ''),
          secure: false,
          ws: true
        }
    }
  }
  
});
