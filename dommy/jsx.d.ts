import { DommyNode } from "./index.d";

export namespace JSXInternal {
  export interface HTMLAttributes<T extends Element> {
    className?: string;
    id?: string;
    onClick?: () => any;
  }

  export interface Element extends DommyNode<any> {}

  export interface IntrinsicElements {
    // HTML
    a: HTMLAttributes<HTMLAnchorElement>;
    div: HTMLAttributes<HTMLDivElement>;
    ul: HTMLAttributes<HTMLUListElement>;
  }
}
