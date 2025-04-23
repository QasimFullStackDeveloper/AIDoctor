/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'bigScr1': { 'raw': '(min-width: 1500px) and (min-height: 1079px) and (max-height: 1081px)' },
        'bigScr': { 'raw': '(min-width: 1025px) and (min-height: 1079px)' },
        'Zenbook': { 'raw': '(width: 853px) and (height: 1280px)' },
        'IpadPro': { 'raw': '(width: 1024px) and (height: 1366px)' },
        'thousand': { 'raw': '(max-width: 1000px) ' },
        'surfacePro': { 'raw': '(width: 912px) and (height: 1368px)' },
        'IpadAir': { 'raw': '(width: 820px) and (height: 1180px)' },
        'IpadmINI': { 'raw': '(width: 768px) and (height: 1024px)' },
        'short': { 'raw': '(max-width: 500px)' },
        'smallerDevice': { 'raw': '(max-width-700px)' },
        'Desktop': {
          'raw': '(width: 1440px) and  (height: 982px)'
        },
        'Desktop1': {
          'raw': '(width: 1536px) and (min-height: 864px) and (max-height:982px)'
        },
        'Laptop': {
          'raw': '(min-width: 1366px) and (max-width: 1370px) and (min-height: 760px) and (max-height:770px)'
        }
        ,
        'laptopDesktop': {
          'raw': '(max-width: 1536px) and (min-width: 1360x) and (min-height: 768px) and (max-height:982px)'
        }
      },
    },
  },
  plugins: [],
}

