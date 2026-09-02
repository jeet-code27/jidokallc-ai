export function cn(...inputs: (string | undefined | null | false | Record<string, boolean>)[]) {
  return inputs
    .flat()
    .filter(Boolean)
    .map((item) => {
      if (typeof item === "object" && item !== null) {
        return Object.entries(item)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(" ");
      }
      return item;
    })
    .join(" ");
}
