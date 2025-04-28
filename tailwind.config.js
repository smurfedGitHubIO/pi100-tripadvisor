/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2f1',
          100: '#cce6e3',
          200: '#99cdc7',
          300: '#66b4ab',
          400: '#339b8f',
          500: '#2A9D8F', // primary
          600: '#237d72',
          700: '#1c5e55',
          800: '#123e39',
          900: '#091f1c'
        },
        accent: {
          50: '#fceeea',
          100: '#f9ddd5',
          200: '#f3bbab',
          300: '#ee9981',
          400: '#e87761',
          500: '#E76F51', // accent
          600: '#b95941',
          700: '#8b4331',
          800: '#5c2c20',
          900: '#2e1610'
        },
        secondary: {
          50: '#f0f9f9',
          100: '#e1f3f3',
          200: '#c3e7e7',
          300: '#a4dbdb',
          400: '#86cfcf',
          500: '#68C3C3',
          600: '#539c9c',
          700: '#3e7575',
          800: '#294e4e',
          900: '#142727'
        },
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: []
}