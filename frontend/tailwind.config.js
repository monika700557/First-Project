/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#7638FF', 
        
       'success-light-bg': 'rgba(15, 183, 107, 0.12)', // Custom background color
        'success-text': '#26af48', // Custom text color
        
        'info-light': 'rgba(2, 182, 179, 0.12)', // Custom background color
        'info-dark': '#1db9aa', // Custom text color

        'warning-light': 'rgba(255, 152, 0, 0.12)', // Custom background color
        'warning-dark': '#f39c12', // Custom text color

        'danger-light': 'rgb(255 218 218 / 49%)', // Custom background color
        'danger-dark': '#FF0000', // Custom text color


        'paid-green': 'rgba(15, 183, 107, 0.12)',
        'sent-green' : 'rgba(2, 182, 179, 0.12)',
        'partialy-paid': 'rgba(255, 152, 0, 0.12)',
        'overdue-red': 'rgb(255 218 218 / 49%)',

      },
      screens: {
        '1440': '1440px', 
      },
    
    },
  },
  plugins: [],
}