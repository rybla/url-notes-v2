export function trim(s: string): string {
  return s.trim();
}

export function stringify(x: any): string {
  return JSON.stringify(x, null, 4);
}

export function do_<A>(k: () => A): A {
  return k();
}
