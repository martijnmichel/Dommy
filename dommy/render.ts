/** @jsx dommy */
import type { ComponentChild } from "./index.d";
import { createElement } from ".";
export function createRoot(target: HTMLElement, children: ComponentChild) {
  target.appendChild(createElement(children));
}
