/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '400': '400px',
        '16': '16%',
        '14': '14%',
        "300": "300px",
        "85": "85%",
        "230": "230px",
      },
      height: {
        '500': '500px',
        "350" : "350px",
        "450" : "450px",
        "550" : "550px",
        "219": "219px",
        "50": "50px",
        "280": "280px",
        "600": "600px",

      },
      colors: {
        'white-smoke': '#F5F5F5',
        'regal-black': '#243c5a',
      },
      top: {
        "200" : "200px",
        "350" : "350px",
        "500" : "500px",
        "530" : "530px",
      },
      fontSize: {
        '27': '27px',
        
      },
      backdropFilter: {
        blur: 'blur(10px)', // Adjust the blur value as needed
      },

      width:{
       "70" : "70%",
       "30" : "30%",
      },
      top:{
        "50" : "50%",
      },

colors: {
   "dim-white": "#ffffff9c",
  
}

    },
  },
  plugins: [require("daisyui")],
}

