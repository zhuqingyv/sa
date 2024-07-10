import { ReactNode, ReactElement, FC } from 'react';

export interface ComponentProps {};

export type Components = {
  [key: string]: ReactNode | ReactElement | FC<ComponentProps>;
};

export interface SaProps {
  dsl: string;
  components: Components;
  state: any;
};

export interface SaState {
  dsl: string;
  components: Components;
  state: any;
};