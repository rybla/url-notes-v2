// src/test_macro_call.ts
var text = await `The macro code:
import { readFileSync, writeFileSync } from "fs";

export async function test() {
  console.log("test was called");
  // const filepath = \`/Users/henry/Documents/daemons/macro_output.txt\`;
  const text = readFileSync(\`src/test_macro_def.ts\`, { encoding: "utf8" });
  writeFileSync("macro_output.txt", "this is the content of macro_output.txt", {
    encoding: "utf8",
  });
  return \`The macro code:\\n\${text}\`;
}
`;
console.log(text);
