import "./style.css";
import Content from "./App";
import { createRoot } from "../freedom";
const app = document.querySelector<HTMLDivElement>("#app")!;

createRoot(app, Content);
