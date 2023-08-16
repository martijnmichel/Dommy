export as namespace dommy;

import { JSXInternal } from "./jsx.d";

export import JSX = JSXInternal;

export type DommyNode<T extends any = {}> = {
  type: "div" | "p" | "ul" | "li" | "string";
  props?: {
    className?: string;
  };
  children?: ComponentChild[];
};

export type ComponentChild = DommyNode | string;

export type ComponentChildren = ComponentChild[] | ComponentChild;
