export function trim(s: string): string {
  return s.trim();
}

export function stringify(x: any): string {
  return JSON.stringify(x, null, 4);
}

export function do_<A>(k: () => A): A {
  return k();
}

export function formatDateTime(date: Date): string {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${year}-${month}-${day},${hours}:${minutes}`;
}

export function show<A>(x: A): string {
  return Bun.inspect(x, {
    colors: true,
    compact: false,
    depth: undefined,
    sorted: false,
  });
}
