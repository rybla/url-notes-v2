import { formatDateTime } from "./utility";

export default function log(...xs: any[]) {
  console.log(`[${formatDateTime(new Date())}]`, ...xs);
}
