/** @jsx h */

import "./style.css";
import { h, createElement } from "../dommy";
import Content from "./App";
const app = document.querySelector<HTMLDivElement>("#app")!;

const test = h("div", {}, h("div", {}, "test 1"), h("div", {}, "test 2"));

console.log(Content);
app.appendChild(Content);
