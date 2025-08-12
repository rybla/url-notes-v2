import { log } from "@/console";

log("[ui-build] begin")
await Bun.build({
  entrypoints: ["ui/index.html"],
  outdir: "ui-dist",
});
log("[ui-build] end")

// -----------------------------------------------------------------------------

process.exit(0);
