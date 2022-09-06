
import fs from 'fs/promises'
import sveltePreprocess from 'svelte-preprocess';
import { preprocess, parse } from "svelte/compiler";
import ifProcess from "./scripts/if.processor.js";

const app = await fs.readFile("./src/routes/index.svelte", "utf-8");


const result = await preprocess(
  app,
  [
    sveltePreprocess(), 
    ifProcess()
  ],
  {
    filename: "App.svelte",
  }
);
console.log(result.code)