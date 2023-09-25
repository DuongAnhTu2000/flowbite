import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Product = {
  id: number;
  name: string;
  category: string;
  brand: string;
  stock: string;
  description: string;
  price: string;
};

type ProductState = {
  GetProductsResponse: Product[];
  AddProductsResponse: Product[];
  UpdateProductsResponse: Product[];
  DeleteProductsResponse: Product[];
}


export const productApi = createApi({
  reducerPath: "productApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.API_URL}`,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductState, null>({
      query: () => ({
        url: `${process.env.API_URL}/product`,
        method: 'GET',
      }),
    }),
    addProducts: builder.query<ProductState, null>({
       query: () => ({
        url: '/product',
        method: 'POST',
      }),
    }),
    updateProducts: builder.query<ProductState, { id: number }>({
       query: ({ id }) => ({
        url: `/product/${id}`,
        method: 'PUT',
      }),
    }),
    deleteProducts: builder.query<ProductState, { id: number }>({
       query: ({ id }) => ({
        url: `/product/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddProductsQuery, useUpdateProductsQuery, useDeleteProductsQuery } = productApi;