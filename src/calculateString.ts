export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiter = ",";

  if (numbers.startsWith("//")) {
    const [firstLine, ...rest] = numbers.split("\n");
    delimiter = firstLine.substring(2);
    numbers = rest.join("\n");
  }

  numbers = numbers.replace(/\n/g, delimiter);

  const parts = numbers.split(delimiter).map(x => x.trim()).filter(x => x !== "");
  
  const negatives = parts.filter(x => parseInt(x, 10) < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  let sum = 0;
  for (const part of parts) {
    sum += parseInt(part, 10);
  }
  return sum;
}
