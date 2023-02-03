import { Dispatch, SetStateAction } from "react";

export interface Props {
  items: Array<Row>;
  setForm: Dispatch<SetStateAction<IForm>>;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  left?: string;
  top?: string;
  form?: IForm;
}
