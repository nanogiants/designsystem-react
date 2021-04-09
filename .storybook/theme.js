import { create } from '@storybook/theming';
import logo from './assets/logo.svg';
import { colors } from '../src/lib/theme/colors';

export default create({
  base: 'light',
  brandTitle: 'NanoGiants',
  brandUrl: 'https://nanogiants.de',
  brandImage: logo,
  fontBase: 'SharpGroteskBook19',
  fontCode: 'monospace',

  appBg: colors.primary.white,

  colorSecondary: colors.primary.nanoblue,
});
