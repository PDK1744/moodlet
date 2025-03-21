const config = {
  plugins: {
    "@tailwindcss/postcss": {
      config: {
        theme: {
          extend: {
            colors: {
              primary: {
                100: '#eff6ff',
                200: '#c5e1f5',
                300: '#87ceeb',
                400: '#4682b4',
                500: '#023047',
                600: '#012f4b',
                700: '#01293a',
                800: '#012529',
                900: '#011d2c',
              },
              secondary: '#219EBC',
            },
          },
        },
      },
    },
  },
};
export default config;