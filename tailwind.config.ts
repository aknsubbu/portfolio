import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
  ],
    daisyui: {
    themes: [
        {
          mytheme: {
          
 "primary": "#041C32",
          
 "secondary": "#205375",
          
 "accent": "#F66B0E",
          
 "neutral": "#000",
          
 "base-100": "#041C32",
          
 "info": "#479eeb",
          
 "success": "#53d59d",
          
 "warning": "#f68009",
          
 "error": "#e5485d",
          },
        },
      ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
}
export default config
