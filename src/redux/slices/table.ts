import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { outlayRowsApi } from "services/outlayRows";
import {
  getRowsWithLevels,
  onCreateRow,
  onDeleteRow,
  onUpdateRow
} from "App.service";

export interface TableState {
  rows: Array<Row>;
}

const initialState: TableState = { rows: [] };

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setRowsAction: (state, { payload }: PayloadAction<Array<Row>>) => {
      console.log("payload", payload);
    },
    deleteRowAction: (state, { payload }: PayloadAction<number>) => {
      const newRows = onDeleteRow(current(state.rows), payload);

      if (!newRows) {
        state.rows = [];
      }

      state.rows = newRows;
    },
    updateRowAction: (
      state,
      { payload: { id, form } }: PayloadAction<{ id: number; form: IForm }>
    ) => {
      const newRows = onUpdateRow(id, current(state.rows), form);

      if (!newRows) {
        state.rows = [];
      }

      state.rows = newRows;
    },
    createRowAction: (
      state,
      {
        payload: { id, form, newNestingLevel }
      }: PayloadAction<{ id: number; form: IForm; newNestingLevel: number }>
    ) => {
      const newRows = onCreateRow(
        id,
        current(state.rows),
        form,
        newNestingLevel
      );

      if (!newRows) {
        state.rows = [];
      }

      state.rows = newRows;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      outlayRowsApi.endpoints.getRows.matchFulfilled,
      (state, { payload }) => {
        const rowsWithLevel = getRowsWithLevels(payload);

        state.rows = rowsWithLevel;
      }
    );
  }
});

export const {
  setRowsAction,
  deleteRowAction,
  updateRowAction,
  createRowAction
} = tableSlice.actions;

export default tableSlice.reducer;
