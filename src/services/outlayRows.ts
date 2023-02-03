import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { entityId } from "constants/entity";

export const outlayRowsApi = createApi({
  reducerPath: "outlayRowsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://185.244.172.108:8081/v1/outlay-rows/entity/${entityId}/row/`
  }),
  endpoints: (builder) => ({
    getRows: builder.query<Array<Row>, null>({
      query: () => `list`
    }),
    deleteRow: builder.mutation({
      query: (rID) => ({
        url: `${rID}/delete`,
        method: "DELETE"
      })
    }),
    updateRow: builder.mutation({
      query: (data) => ({
        url: `${data.id}/update`,
        method: "POST",
        body: data.body
      })
    }),
    createRow: builder.mutation({
      query: (data) => ({
        url: `${data.id}/create`,
        method: "POST",
        body: data.body
      })
    })
  })
});

export const { useGetRowsQuery, useDeleteRowMutation, useUpdateRowMutation, useCreateRowMutation } =
  outlayRowsApi;
