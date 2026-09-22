import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // На этой машине Vite по умолчанию слушает только IPv6-loopback (::1), который недоступен
    // через виртуальные сетевые адаптеры (VPN/туннели), используемые локальными
    // инструментами/агентами. `host: true` слушает все интерфейсы (0.0.0.0 + ::) — тогда
    // localhost открывается и оттуда. См. CLAUDE.md, раздел "Диагностика: dev-сервер
    // недоступен локально".
    host: true,
  },
})
