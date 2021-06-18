import { create } from '@storybook/theming';
import logo from './assets/logo.svg';
import tokens from '../src/lib/tokens';

export default create({
  base: 'light',
  brandTitle: 'NanoGiants',
  brandUrl: 'https://nanogiants.de',
  brandImage: logo,
  fontBase: 'SharpGroteskBook19',
  fontCode: 'monospace',

  appBg: tokens.colors.primary.white,

  colorSecondary: tokens.colors.primary.nanoblue,
});
