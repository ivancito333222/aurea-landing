/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        aurea: {
          dark: '#1d1c1c',       // Tu fondo principal exacto
          card: '#2a2929',       // Ligeramente más claro para las tarjetas de Prueba Social
        },
        gold: {
          DEFAULT: '#b4a67b',    // Dorado principal del logo (Branding)
          dark: '#695a3e',       // Dorado oscuro para fondos secundarios o bordes
          muted: '#807c64',      // Tono oliva/dorado para detalles sutiles
          accent: '#847464',     // Tono tierra para acentos complementarios
        },
        content: {
          main: '#F3F4F6',       // Blanco roto para textos (legibilidad extrema)
          muted: '#9CA3AF',      // Gris para subtítulos secundarios
        },
        conversion: {
          whatsapp: '#25D366',   // El verde universal de cierre
          hover: '#1EBE5D',      // Interacción del botón
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}