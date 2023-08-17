/** @jsx dommy */
import type { DommyNode, ComponentChild} from "./index.d";

export function dommy(
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
  if (node.props) {
    Object.entries(node.props).forEach(([name, value]) => {
      if (name.startsWith("do") && typeof value === "function") {
        $el.addEventListener(name.substring(2).toLocaleLowerCase(), value);
      } else if (name === "style" && typeof value === "object") {
        Object.entries(value).forEach(([k, v]: [any, any]) => {
          $el.style[k] = v;
        });
      } else if (typeof value === "string") $el.setAttribute(name, value);
    });
  }
  node.children?.map(createElement).forEach($el.appendChild.bind($el));
  return $el;
}
