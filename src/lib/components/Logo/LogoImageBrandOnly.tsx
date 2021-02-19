import React, { FunctionComponent } from 'react';
import { LogoProps, NanoLogoSize } from './shared';

export const LogoImageBrandOnly: FunctionComponent<LogoProps> = (
  props: LogoProps
) => {
  const { size, fill } = props;

  const getHeightFromSize = (logoSize: NanoLogoSize): string => {
    switch (logoSize) {
      case NanoLogoSize.SMALL:
        return '29px';
      case NanoLogoSize.LARGE:
        return '116px';
      default:
        return '58px';
    }
  };
  return (
    <svg
      width="57"
      height="58"
      viewBox="0 0 57 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: getHeightFromSize(size), width: 'auto' }}
    >
      <g clipPath="url(#clip0)">
        <path
          d="M11.22 0.72998V17.2H36.58C36.43 25.22 33.52 32.79 26.82 37.02C23.47 39.21 19.24 40.23 13.7 40.23C8.21 40.23 3.65 39.26 0 37.21V56.81C2.62 57.21 5.38 57.42 8.31 57.42C21.57 57.42 30.32 52.17 35.56 44.16C38.04 40.08 39.79 35.42 40.81 30.61L42.27 55.24H56.7V0.72998H11.22Z"
          fill={fill ?? '#19194A'}
        />
      </g>
    </svg>
  );
};
