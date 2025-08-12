import * as fs from "fs";
import type z from "zod";

export async function readTextFile(filepath: string): Promise<string | null> {
  try {
    return fs.readFileSync(filepath, { encoding: "utf8" });
  } catch {
    return null;
  }
}

export async function readJsonFile<A>(
  filepath: string,
  schema: z.ZodSchema<A>,
): Promise<z.ZodSafeParseResult<A> | null> {
  try {
    return await schema.safeParseAsync(
      JSON.parse(fs.readFileSync(filepath, { encoding: "utf8" })),
    );
  } catch {
    return null;
  }
}
