import React, { FunctionComponent } from 'react';

import { LogoProps, NanoLogoSize } from './shared';

export const LogoTwoLiner: FunctionComponent<LogoProps> = (
  props: LogoProps
) => {
  const { size, fill } = props;

  const getHeightFromSize = (logoSize: NanoLogoSize): string => {
    switch (logoSize) {
      case NanoLogoSize.SMALL:
        return '56.5px';
      case NanoLogoSize.LARGE:
        return '226px';
      default:
        return '113px';
    }
  };
  return (
    <svg
      width="215"
      height="113"
      viewBox="0 0 215 113"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: getHeightFromSize(size), width: 'auto' }}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M1.42 54.5899V14.1899H8.5L25.78 41.4999L26.86 44.1599L26.63 41.2699V14.1899H33.66V54.5899H26.8L9.29 26.9399L8.16 24.2799L8.44 27.1099V54.5899H1.42ZM50.03 55.4399C42.95 55.4399 39.38 52.0399 39.38 46.7099C39.38 43.0799 40.97 40.3599 43.63 38.7199C44.54 38.0999 45.5 37.6399 46.41 37.3599C48.34 36.6799 50.77 36.2299 54.85 35.5999C60.69 34.8599 63.01 34.0699 63.01 31.4099C63.01 28.6899 61.25 26.9899 56.15 26.9899C50.77 26.9899 48.33 29.3099 48.1 33.5099H40.45C40.96 26.0899 46.4 21.2099 55.75 21.2099C59.32 21.2099 62.04 21.6599 64.19 22.6299C68.44 24.4399 70.14 27.8999 70.14 32.5999V54.5799H64.13L63.34 48.0599C61.14 52.3199 56.77 55.4399 50.03 55.4399ZM58.13 48.2399C61.3 46.2599 63.06 42.9699 63.06 39.8499V38.0899C61.7 39.0499 59.43 39.7299 56.49 40.1899C52.52 40.8099 50.94 41.2699 49.41 42.2299C48.11 43.0799 47.48 44.2099 47.48 45.6299C47.48 48.3499 49.18 49.7099 52.58 49.7099C54.73 49.7099 56.55 49.1999 58.13 48.2399ZM77 54.5899V22.0099H83.29L83.97 28.5299C85.73 24.0499 89.41 21.2199 95.02 21.2199C102.9 21.2199 107.09 26.4299 107.09 34.5399V54.5999H99.61V36.3399C99.61 31.0099 97.91 27.6699 92.58 27.6699C87.03 27.6699 84.48 31.5199 84.48 37.5799V54.5799H77V54.5899ZM112.53 38.9499V38.0999C112.53 34.4699 113.27 31.3599 114.68 28.8599C117.51 23.8699 122.56 21.2099 128.96 21.2099C132.25 21.2099 135.02 21.8299 137.46 23.1899C142.45 25.8499 145.39 30.8999 145.39 38.0899V38.9399C145.39 42.5099 144.71 45.4599 143.35 47.8899C140.52 52.8199 135.59 55.4299 128.96 55.4299C118.42 55.4399 112.53 49.5999 112.53 38.9499ZM137.86 38.8299V38.0899C137.86 31.3999 134.4 27.5499 129.02 27.5499C123.69 27.5499 120.13 31.1799 120.13 38.0899V38.8299C120.13 45.2899 123.42 48.9199 128.97 48.9199C134.57 48.9199 137.86 45.2899 137.86 38.8299ZM25.84 106.94C23.8 110.06 20.4 112.1 15.24 112.1C5.38 112.1 0 106.26 0 93.2899V89.3799C0 76.4599 6.69 70.1099 17.68 70.1099C27.77 70.1099 33.43 75.4899 33.88 84.8399H26.12C26.06 83.3099 25.72 82.0599 25.1 80.7599C23.97 78.3199 21.76 76.7399 17.56 76.7399C10.7 76.7399 7.59 80.9299 7.59 89.6599V92.9999C7.53 101.73 10.65 105.41 17.34 105.41C19.49 105.41 21.14 105.01 22.44 104.16C25.05 102.52 26.18 99.5699 26.24 96.4499H16.38V90.0499H34.06V111.24H28.45L27.88 101.66C27.48 103.54 26.8 105.35 25.84 106.94ZM39.83 70.2299C39.83 66.5999 41.47 65.3599 44.76 65.3599C48.05 65.3599 49.69 66.6099 49.69 70.2299C49.69 73.7399 48.1 75.1599 44.76 75.1599C41.19 75.1499 39.83 73.9699 39.83 70.2299ZM40.91 78.6699H48.45V111.25H40.91V78.6699ZM64.37 112.1C57.29 112.1 53.72 108.7 53.72 103.37C53.72 99.7399 55.31 97.0199 57.97 95.3799C58.88 94.7599 59.84 94.2999 60.75 94.0199C62.68 93.3399 65.11 92.8899 69.19 92.2599C75.03 91.5199 77.35 90.7299 77.35 88.0699C77.35 85.3499 75.59 83.6499 70.49 83.6499C65.11 83.6499 62.67 85.9699 62.44 90.1699H54.79C55.3 82.7499 60.74 77.8699 70.09 77.8699C73.66 77.8699 76.38 78.3199 78.53 79.2899C82.78 81.0999 84.48 84.5599 84.48 89.2599V111.24H78.47L77.68 104.72C75.47 108.98 71.11 112.1 64.37 112.1ZM72.47 104.9C75.64 102.92 77.4 99.6299 77.4 96.5099V94.7499C76.04 95.7099 73.77 96.3899 70.83 96.8499C66.86 97.4699 65.28 97.9299 63.75 98.8899C62.45 99.7399 61.82 100.87 61.82 102.29C61.82 105.01 63.52 106.37 66.92 106.37C69.07 106.37 70.88 105.86 72.47 104.9ZM91.34 111.25V78.6699H97.63L98.31 85.1899C100.07 80.7099 103.75 77.8799 109.36 77.8799C117.24 77.8799 121.43 83.0899 121.43 91.1999V111.26H113.95V92.9999C113.95 87.6699 112.25 84.3299 106.92 84.3299C101.37 84.3299 98.82 88.1799 98.82 94.2399V111.24H91.34V111.25ZM141.82 111.25C138.76 111.25 136.38 110.8 134.79 110.06C131.5 108.42 130.48 104.85 130.48 98.2199V85.2399H124.13V78.9499H127.02C128.1 78.9499 128.83 78.8399 129.34 78.6099C130.42 78.0999 130.76 76.8499 130.93 74.1899C130.99 72.7699 131.04 70.8499 131.04 69.8799H137.39V78.6599H146V85.2299H137.39V96.9599C137.39 99.1099 137.56 100.7 137.84 101.78C138.35 103.93 140.05 104.33 143.68 104.33H146V111.24H141.82V111.25ZM148.62 100.48H156.67C157.35 104.33 160.01 105.86 164.66 105.86C169.42 105.86 171.29 104.27 171.29 101.67C171.29 100.71 170.89 99.9099 170.04 99.3999C168.4 98.4399 165.56 98.0399 162.45 97.5899C159.5 97.1399 156.5 96.6299 154.06 95.3199C151.62 94.0199 150.09 91.8099 150.09 88.1799C150.09 82.1699 154.57 77.8699 163.52 77.8699C172.87 77.8699 177.12 81.8899 178.02 88.4099H170.43C169.92 85.2399 167.77 83.8199 163.46 83.8199C158.81 83.8199 157.4 85.4599 157.4 87.7299C157.4 88.6899 157.8 89.4899 158.65 89.9999C160.29 90.9599 163.18 91.3599 166.3 91.8099C169.25 92.2599 172.25 92.7699 174.69 94.0799C177.13 95.3799 178.66 97.5899 178.66 101.22C178.66 107.51 174.13 112.1 164.5 112.1C154.46 112.1 149.59 108.07 148.62 100.48ZM168.97 0.109863V16.5699H194.31C194.16 24.5799 191.25 32.1599 184.55 36.3799C181.2 38.5599 176.98 39.5799 171.44 39.5799C165.95 39.5799 161.4 38.6099 157.75 36.5599V56.1499C160.36 56.5499 163.13 56.7599 166.05 56.7599C179.3 56.7599 188.04 51.5199 193.29 43.5099C195.77 39.4299 197.51 34.7699 198.53 29.9599L199.99 54.5799H214.41V0.109863H168.97Z"
          fill={fill ?? '#19194A'}
        />
      </g>
    </svg>
  );
};
