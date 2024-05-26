/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-b': 'var(--primary-b)',
        'primary-bg': 'var(--primary-bg)',
        'primary-y': 'var(--primary-y)',
        'primary-w': 'var(--primary-w)',
        'supporting-3': 'var(--supporting-3)',
        'supporting-6': 'var(--supporting-6)',
        'supporting-7': 'var(--supporting-7)',
        'secondary-b-lighten20': 'var(--secondary-b-lighten20)',
        'secondary-bg-lighten90': 'var(--secondary-bg-lighten90)',
        'signal-error': 'var(--signal-error)',
        'ui-g1': 'var(--ui-g1)',
        'ui-g2': 'var(--ui-g2)',
        'ui-g3': 'var(--ui-g3)',
        'ui-g4': 'var(--ui-g4)',
        'ui-g5': 'var(--ui-g5)',
        'ui-g6': 'var(--ui-g6)',
        'ui-g7': 'var(--ui-g7)',
        blue: 'var(--blue)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
  plugins: [],
};
