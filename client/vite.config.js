import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createProxyMiddleware } from 'http-proxy-middleware';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/members': {
        target: `https://fd91-175-123-6-225.ngrok-free.app/members`,
        changeOrigin: true, 
        secure: false,
        rewrite: path => path.replace(/^\/members/, ''),
        ws: true,
        headers: {
          'ngrok-skip-browser-warning': 'true',
          value : true,
        },
      },}

     
  },
  define: {
    global: {},
  },
  
});
