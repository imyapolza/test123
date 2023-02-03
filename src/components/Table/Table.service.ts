export function getDataFromObject<T>(
  data: T | undefined,
  properties: Array<
    | number
    | "rowName"
    | "salary"
    | "equipmentCosts"
    | "supportCosts"
    | "estimatedProfit"
  >
) {
  const result: Array<Row> = [];

  properties.map((property) => {
    if (typeof data !== "undefined") {
      result.push(data[property as keyof typeof data] as Row);
    }
  });

  return result;
}
