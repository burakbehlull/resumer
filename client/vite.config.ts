import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"

function way(name){
  return path.resolve(__dirname, name)
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '~': way('src'),
	    '@types': way('src/types/index'),
      '@pages': way('src/pages/index'),
      '@store' : way('src/store/index'),
      '@profile': way('src/pages/Profile/index'),      
      '@components': way('src/components/index')      

    }
  },
})
