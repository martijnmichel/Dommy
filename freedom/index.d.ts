export as namespace freedom;

export import JSX = JSXInternal;

export * from './create-element';
export * from './render';


export type DommyNode<T extends Partial<HTMLElement> = {}> = {
  type: keyof JSX.IntrinsicElements;
  props?: JSX.HTMLAttributes<T>;
  children?: ComponentChild[];
};

export type ComponentChild = DommyNode | string;

export type ComponentChildren = ComponentChild[] | ComponentChild;

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
