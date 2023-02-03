interface IRow {
  text: string;
  width?: string;
}

export interface Props {
  thead: Array<IRow>;
  tbody: Array<string[]>;
}
