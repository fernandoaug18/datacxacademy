import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/datacxacademy/', // 👈 el nombre exacto de tu repo
  plugins: [react()],
})
