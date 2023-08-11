/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans':' "DM Sans", sans-serif',
    },
    colors: {
      'transparent': 'transparent',
      'PureBlack':'#000000',
      'LightGray':'#DFDFDF',
      'PureWhite':'#FFFFFF',
      'LightYellow':'#FFC593',
      'LightPink':'#BC7198',
      'LightBlue':'#5A77FF',
    },
    extend: {
      backgroundImage:{
        'betaBG':'/src/assets/shared/mobile/bg-beta.jpg',
        'betaBGTablet':'/src/assets/shared/tablet/bg-beta.jpg',
        'betaBGDesktop':'/src/assets/shared/desktop/bg-beta.jpg',
      },
    },
  },
  plugins: [],
}