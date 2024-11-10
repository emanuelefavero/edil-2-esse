import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

// * Uncomment the following line to use the default Tailwind CSS colors
// import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '5xs': '200px',
      '4xs': '250px',
      '3xs': '320px',
      '2xs': '375px',
      xs: '440px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
    },

    extend: {
      // * Add custom colors or change the default colors here
      // colors: {
      //   // primaryBackground: 'var(--background)',
      //   // primaryForeground: 'var(--foreground)',
      //   primary: colors.yellow, // e.g. text-primary-600
      //   white: colors.white,
      //   black: colors.black,
      //   background: colors.stone,
      //   foreground: colors.stone,
      //   stone: {
      //     50: '#f9f9f9',
      //     100: '#f5f5f4',
      //     200: '#e7e5e4',
      //     300: '#d6d3d1',
      //     400: '#a8a29e',
      //     500: '#78716c',
      //     600: '#57534e',
      //     700: '#44403c',
      //     800: '#292524',
      //     900: '#1c1917',
      //     950: '#0c0a09',
      //   },
      //   amber: {
      //     50: '#fffbeb',
      //     100: '#fef3c7',
      //     200: '#fde68a',
      //     300: '#fcd34d',
      //     400: '#fbbf24',
      //     500: '#f59e0b',
      //     600: '#d97706',
      //     700: '#b45309',
      //     800: '#92400e',
      //     900: '#78350f',
      //     950: '#451a03',
      //   },
      //   yellow: {
      //     50: '#fefce8',
      //     100: '#fef9c3',
      //     200: '#fef08a',
      //     300: '#fde047',
      //     400: '#facc15',
      //     500: '#eab308',
      //     600: '#ca8a04',
      //     700: '#a16207',
      //     800: '#854d0e',
      //     900: '#713f12',
      //     950: '#422006',
      //   },
      //   red: {
      //     50: '#fef2f2',
      //     100: '#fee2e2',
      //     200: '#fecaca',
      //     300: '#fca5a5',
      //     400: '#f87171',
      //     500: '#ef4444',
      //     600: '#dc2626',
      //     700: '#b91c1c',
      //     800: '#991b1b',
      //     900: '#7f1d1d',
      //     950: '#3f1212',
      //   },
      // },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },

      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },

      backgroundImage: {
        'hero-image': "url('/hero-image.webp')",
        'radial-pattern':
          'radial-gradient(rgba(202, 139, 4, 0.5) 0.65px, rgba(120, 113, 108, 0) 0.65px)',
      },

      backgroundSize: {
        '13': '13px 13px',
      },

      textShadow: {
        sm: '0.25px 0.5px 0.25px var(--text-shadow)',
        yellow: '0.25px 0.5px 0.25px rgba(133, 78, 14, 0.8)', // yellow-800/80
        DEFAULT: '0.5px 1px 0.5px var(--text-shadow)',
        lg: '1px 1.5px 1px var(--text-shadow)',
        none: 'none',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
export default config
