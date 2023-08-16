import { DommyNode } from "./index.d";

export namespace JSXInternal {
  export type HTMLAttributes<T extends Partial<HTMLElement>> = {
    className?: string;
    doClick?: () => any;
    style?: Partial<CSSStyleDeclaration>;
  } & Partial<Omit<T, "style">>;

  export interface Element extends DommyNode<any> {}

  export interface IntrinsicElements {
    // HTML
    a: HTMLAttributes<HTMLAnchorElement>;
    div: HTMLAttributes<HTMLDivElement>;
    ul: HTMLAttributes<HTMLUListElement>;
    li: HTMLAttributes<HTMLLIElement>;
    p: HTMLAttributes<HTMLParagraphElement>;
    img: HTMLAttributes<HTMLImageElement>;
  }
}
