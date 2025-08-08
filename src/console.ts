import { formatDateTime } from "./utility";

export function log(...xs: any[]) {
  console.log(`[${formatDateTime(new Date())}]`, ...xs);
}

export function error(...xs: any[]) {
  console.error(`[${formatDateTime(new Date())}]`, ...xs);
}
