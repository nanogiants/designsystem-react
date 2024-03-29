import { create } from '@storybook/theming';
import logo from './assets/logo.svg';
import colors from '../src/lib/tokens/colors';

export default create({
  base: 'light',
  brandTitle: 'NanoGiants',
  brandUrl: 'https://nanogiants.de',
  brandImage: logo,
  fontBase: 'SharpGroteskBook19',
  fontCode: 'monospace',

  appBg: colors.basic['000'],

  colorSecondary: colors.primary['500'],
});
