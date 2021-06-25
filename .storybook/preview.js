import { GlobalStyle } from '../src/lib/components/shared/global';
import colors from '../src/lib/tokens/colors';
import { version } from '../package.json';
import theme from './theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    values: [
      { name: 'white', value: colors.basic['000'] },
      { name: 'black', value: colors.basic['900'] },
      { name: 'nanoblue', value: colors.primary['500'] },
      { name: 'giantred', value: colors.secondary['500'] },
    ],
  },
  options: {
    storySort: {
      order: [
        `Overview ${version}`,
        ['Introduction', 'Installation', 'Usage'],
        'Styleguide',
        'Components',
      ],
    },
  },
  docs: {
    theme: theme,
  },
};

// Global decorator to apply the styles to all stories
export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
