import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port:9000
  },
  resolve:{
    alias:{
      
     '@Components': path.resolve(__dirname, 'src/components'),
     '@images': path.resolve(__dirname, 'src/assets/images')
     
    
    }
  }
})
