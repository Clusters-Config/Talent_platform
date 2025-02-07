import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //env variables
  define: { 
    'process.env': process.env(process.env.API_KEY)
  }
})
