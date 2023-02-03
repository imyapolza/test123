export interface Props {
  data: Row;
  properties: Array<
    | "rowName"
    | "salary"
    | "equipmentCosts"
    | "supportCosts"
    | "estimatedProfit"
    | number
  >;
  child: (Row & { child: string })[];
}
