/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily:{
      'sans':['cursive','sans-serif'],
    },
    extend: {
      colors: {
        'darkOrange':'#f46530',
        'lightOrange':'#eebca9',
        'darkGray':'#999998',
        'lightGray':'#c0bfbf',
          'red':'#FF0000',
          'purple':'#A020F0',
          'indigo':'#4B0082',
          'mustard':'#FFDB58',
          'pink':'#FFC0CB',
          'green':'#00FF00',
          'brown':'#964B00',
          'blue':'#0000FF',
          'yellowGold':'#FFD700',
          'skyBlue':'#87ceeb',
          'purpleUnique':'#A7226E',
          'redUnique':'#EC2049',
          'orangeUnique':'#F26B38',
          'yellowUnique':'#F7DB4F',
          'tealUnique':'#2F9599'

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
