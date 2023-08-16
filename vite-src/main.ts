import "./style.css";
import Content from "./App";
import { createRoot } from "../dommy";
const app = document.querySelector<HTMLDivElement>("#app")!;

createRoot(app, Content);
