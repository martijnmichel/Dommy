/** @jsx h */
import type { DommyNode, ComponentChild } from "./index.d";

export function h(
  type: DommyNode["type"],
  props: DommyNode["props"],
  ...children: ComponentChild[]
): DommyNode {
  return { type, props, children };
}

export function createElement(node: ComponentChild) {
  if (typeof node === "string") {
    return document.createTextNode(node);
  }
  const $el = document.createElement(node.type);
  node.children?.map(createElement).forEach($el.appendChild.bind($el));
  return $el;
}
