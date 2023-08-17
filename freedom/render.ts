/** @jsx freedom */
import type { ComponentChild } from ".";
import { createElement } from ".";
export function createRoot(target: HTMLElement, children: ComponentChild) {
  target.appendChild(createElement(children));
}
