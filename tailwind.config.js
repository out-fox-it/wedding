'use strict'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      backgroundImage: {
        'gradient-stripe':
          'repeating-linear-gradient(-45deg, var(--tw-gradient-from), var(--tw-gradient-from) 2rem, var(--tw-gradient-to) 2rem, var(--tw-gradient-to) 4rem)',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#ec407a',
          secondary: '#5c2aa7',
          accent: '#f9c001',
          neutral: '#2a323c',
          'base-100': '#222033',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fdba74',
          error: '#f87272',
        },
      },
    ],
    logs: false,
  },
}
