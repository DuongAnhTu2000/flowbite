import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ProductState {
  product: Product[];
  isFetching: boolean;
  error: boolean;
}

export const getProducts = createAsyncThunk('product', async () => {
  try {
    const res = await axios.get<Product[]>(`${process.env.API_URL}/product`);
    console.log(res)
    return res?.data;
  } catch (err) {
    console.log(err);
  }
});
export const addProducts = createAsyncThunk('product/add', async () => {
  try {
    const res = await axios.post<Product>(`${process.env.API_URL}/product`);
    return res?.data;
  } catch (err) {
    console.log(err);
  }
});

export const updateProducts = createAsyncThunk('product/update', async id => {
  try {
    const res = await axios.put<Product>(`${process.env.API_URL}/${id}`);
    return res?.data;
  } catch (err) {
    console.log(err);
  }
});

export const deleteProducts = createAsyncThunk('product/delete', async (id: string) => {
  try {
    const res = await axios.delete(`${process.env.API_URL}/${id}`);
    return res?.data;
  } catch (err) {
    console.log(err);
  }
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
    isFetching: false,
    error: false,
  } as ProductState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.isFetching = true;
      state.error = false;
    });

    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.product = action.payload as Product[];
      state.isFetching = false;
      state.error = false;
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      state.isFetching = false;
      state.error = true;
    });

    builder.addCase(addProducts.fulfilled, (state, { payload }) => {
      if (payload) {
        state.product.push(payload);
      }
    });

    builder.addCase(updateProducts.fulfilled, (state, { payload }) => {
      if (payload) {
        const index = state.product.findIndex(item => item.id === payload.id);
        if (index !== -1) {
          state.product[index] = payload;
        }
      }
    });

    builder.addCase(deleteProducts.fulfilled, (state, { payload }) => {
      if (payload) {
        const index = state.product.findIndex(item => item.id === payload.id);
        if (index !== -1) {
          state.product.splice(index, 1);
        }
      }
    });
  },
});

export const productReducer = productSlice.actions;
export default productSlice.reducer;
