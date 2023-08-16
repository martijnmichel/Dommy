/** @jsx h */

import type { JSX } from "../dommy/index.d";
import { createElement, h } from "../dommy";
const Content: JSX.Element = (
  <div>
    <p>test</p>
    <ul>
      <li>hoi</li>
      <li>hoi</li>
      <li>hoi</li>
      <li>hoi</li>
    </ul>
  </div>
);

export default createElement(Content);
