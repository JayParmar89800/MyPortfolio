import plugin from 'tailwindcss/plugin';

const customTextStrokePlugin = plugin(function({ matchUtilities, theme }) {
  matchUtilities(
    {
      'text-stroke': (value) => ({
        '-webkit-text-stroke-width': value,
        'text-stroke-width': value,
      }),
    },
    {
      values: theme('textStrokeWidth', {
        DEFAULT: '2px',
        sm: '1px',
        md: '3px',
        lg: '3px',
      }),
    }
  );

  matchUtilities(
    {
      'text-stroke-color': (value) => ({
        '-webkit-text-stroke-color': value,
        'color': 'transparent', // Ensure text color is set to transparent
        // 'text-stroke-color': value,
      }),
    },
    {
      values: theme('colors'),
    }
  );
});

export default customTextStrokePlugin;
