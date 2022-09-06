
import fs from 'fs/promises'
import sveltePreprocess from 'svelte-preprocess';
import { preprocess, parse } from "svelte/compiler";
import ifProcess from "./scripts/if.processor.js";

const app = await fs.readFile("./src/routes/index.svelte", "utf-8");
const layout = await fs.readFile("./src/routes/__layout.svelte", "utf-8");


const withIf = await preprocess(
  app,
  [
    sveltePreprocess(), 
    ifProcess()
  ],
  {
    filename: "App.svelte",
  }
);
const withoutIf = await preprocess(
  layout,
  [
    sveltePreprocess(), 
    ifProcess()
  ],
  {
    filename: "__layout.svelte",
  }
);
console.log(withIf.code)
console.log(withoutIf.code)