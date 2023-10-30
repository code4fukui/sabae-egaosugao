import { KVTXT } from "https://code4fukui.github.io/KVTXT/KVTXT.js";
import { dir2array } from "https://js.sabae.cc/dir2array.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const fns = (await dir2array("./")).sort();
const list = [];
for (const fn of fns) {
  if (!fn.endsWith(".kv.txt")) continue;
  const s = await Deno.readTextFile(fn);
  const json = KVTXT.decode(s);
  await Deno.writeTextFile(fn.substring(0, fn.length - 6) + "json", JSON.stringify(json, null, 2));
  list.push(json);
}
await Deno.writeTextFile("egaosugao.csv", CSV.stringify(list));
