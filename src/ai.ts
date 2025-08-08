export async function gemini(prompt: string) {
  let result =
    await Bun.$`/Users/henry/.bun/bin/gemini --prompt "${prompt.trim()}"`.text();
  const prefix = "Loaded cached credentials.\n";
  if (result.startsWith(prefix)) result = result.slice(prefix.length);
  return result;
}

export async function gemini_flash(prompt: string) {
  let result =
    await Bun.$`/Users/henry/.bun/bin/gemini --model gemini-2.5-flash --prompt "${prompt.trim()}"`.text();
  const prefix = "Loaded cached credentials.\n";
  if (result.startsWith(prefix)) result = result.slice(prefix.length);
  return result;
}
