import { GlobalStyle } from '../src/lib/components/shared/global';
import tokens from '../src/lib/tokens';
import { version } from '../package.json';
import theme from './theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    values: [
      { name: 'white', value: tokens.colors.primary.white },
      { name: 'black', value: tokens.colors.primary.black },
      { name: 'nanoblue', value: tokens.colors.primary.nanoblue },
      { name: 'giantred', value: tokens.colors.primary.giantred },
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
