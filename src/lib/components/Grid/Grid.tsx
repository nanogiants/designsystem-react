import React, { FunctionComponent, ReactNode } from 'react';
import './bootstrap-grid.css';

export interface NanoGridProps {
  children: ReactNode[];
  fluid?: boolean;
}

export const NanoGrid: FunctionComponent<NanoGridProps> = (
  props: NanoGridProps
) => {
  const { children, fluid = false } = props;

  return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>;
};
