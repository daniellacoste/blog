import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default {
  content: ['./app/**/*.{ts,tsx}', './content/**/*.mdx', './public/**/*.svg'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      typography: {
        // facepalm hack to turn off backticks:
        // https://github.com/tailwindlabs/tailwindcss-typography/issues/18#issuecomment-733045571
        DEFAULT: {
          css: {
            'code::before': {
              content: 'none'
            },
            'code::after': {
              content: 'none'
            }
          }
        }
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
