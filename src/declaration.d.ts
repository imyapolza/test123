declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

interface Row {
  child: (T & { child?: Array<Row> })[];
  id: number;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  nestingLevel?: number;
  isFirstChild?: boolean;
  prevChildId?: number;
  childId?: number;
  [number: number]: string;
}

interface IForm {
  [key: number]:
    | "rowName"
    | "salary"
    | "equipmentCosts"
    | "supportCosts"
    | "estimatedProfit";
}

type DetailedProps = { nestingLevel?: string } & { total?: number } & {
  isFirstChild?: boolean;
} & { prevNestingLevel?: string } & { childId?: number } & {
  prevChildId?: number;
} & { id?: number };

