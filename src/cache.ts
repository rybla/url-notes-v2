import { log } from "./console";

export async function cacheText(
  filepath: string,
  initialize: () => Promise<string>,
): Promise<string> {
  const file = Bun.file(filepath);
  if (await file.exists()) {
    return await file.text();
  }
  const text = await initialize();
  Bun.write(file, text);
  log(`initialized cache: ${filepath}`);
  return text;
}

export async function cacheJson<A>(
  filepath: string,
  initialize: () => Promise<A>,
): Promise<A> {
  const file = Bun.file(filepath);
  if (await file.exists()) {
    return JSON.parse(await file.text());
  }
  const a = await initialize();
  Bun.write(file, JSON.stringify(a));
  log(`initialized cache: ${filepath}`);
  return a;
}
