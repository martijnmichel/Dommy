export as namespace dommy;

import { JSXInternal } from "./jsx.d";

export import JSX = JSXInternal;

export type DommyNode<T extends Partial<HTMLElement> = {}> = {
  type: keyof JSX.IntrinsicElements;
  props?: JSX.HTMLAttributes<T>;
  children?: ComponentChild[];
};

export type ComponentChild = DommyNode | string;

export type ComponentChildren = ComponentChild[] | ComponentChild;
