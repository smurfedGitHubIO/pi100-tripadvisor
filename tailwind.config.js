/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f7ed',
          100: '#f3efdb',
          200: '#e8dfb7',
          300: '#dccf93',
          400: '#d1bf6f',
          500: '#C5AF4B', // primary gold (Marcos-era inspired gold)
          600: '#9e8c3c',
          700: '#76692d',
          800: '#4f461e',
          900: '#27230f'
        },
        accent: {
          50: '#f9eeed',
          100: '#f4ddda',
          200: '#e9bab5',
          300: '#de9890',
          400: '#d3756b',
          500: '#C85246', // accent (deep mahogany red used in palace interiors)
          600: '#a04238',
          700: '#78312a',
          800: '#50211c',
          900: '#28100e'
        },
        secondary: {
          50: '#eaeff4',
          100: '#d5dfe9',
          200: '#abbfd3',
          300: '#819fbd',
          400: '#567fa7',
          500: '#2C5F91', // royal blue (inspired by presidential symbols)
          600: '#234c74',
          700: '#1a3957',
          800: '#12263a',
          900: '#09131d'
        },
        tertiary: {
          50: '#f5f0e8',
          100: '#ebe1d1',
          200: '#d7c3a3',
          300: '#c3a575',
          400: '#af8747',
          500: '#9B6919', // traditional wood brown (reminiscent of palace woodwork)
          600: '#7c5414',
          700: '#5d3f0f',
          800: '#3e2a0a',
          900: '#1f1505'
        },
        success: '#4D865A', // deep forest green used in government offices
        warning: '#D4A72C', // golden amber warning
        error: '#AB3232', // deep red reminiscent of official ribbons
        neutral: {
          50: '#f9f7f1',
          100: '#f3efe3',
          200: '#e7dfc7',
          300: '#dbcfab',
          400: '#cfbf8f',
          500: '#C3AF73', // cream/ivory neutral (inspired by formal papers)
          600: '#9c8c5c',
          700: '#756945',
          800: '#4e462e',
          900: '#272317'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Times New Roman', 'serif'] // Added for formal documents
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'gold': '0 4px 6px -1px rgba(197, 175, 75, 0.1), 0 2px 4px -1px rgba(197, 175, 75, 0.06)',
        'gold-lg': '0 10px 15px -3px rgba(197, 175, 75, 0.1), 0 4px 6px -2px rgba(197, 175, 75, 0.05)',
      }
    }
  },
  plugins: []
}