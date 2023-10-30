import * as t from "https://deno.land/std/testing/asserts.ts";
import { KVTXT } from "./KVTXT.js";

Deno.test("simple", () => {
  const s = "key: val";
  t.assertEquals(KVTXT.decode(s), { key: "val" });
});
Deno.test("keys", () => {
  const s = `
key: val
key2: val2
key3: val3
`;
  t.assertEquals(KVTXT.decode(s), { key: "val", key2: "val2", key3: "val3" });
});
Deno.test("multi line value", () => {
  const s = `
key:
val
val2
val3
key2: val4
`;
  t.assertEquals(KVTXT.decode(s), { key: "val\nval2\nval3", key2: "val4" });
});
