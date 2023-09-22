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

export const getProduct = createAsyncThunk(`${process.env.API_URL}/product`, async () => {
  try {
    const response = await axios.get<Product[]>(`${process.env.API_URL}/product`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});
export const addProduct = createAsyncThunk(
  `${process.env.API_URL}/product/add`,
  async (item: Product) => {
    try {
      const res = await axios.post<Product>(`${process.env.API_URL}/product`, item);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

interface UpdateProductData {
  id: string;
  newData: Partial<Product>;
}

export const updateProduct = createAsyncThunk(
  `${process.env.API_URL}/product/update`,
  async (update: UpdateProductData) => {
    try {
      const res = await axios.put<Product>(
        `${process.env.API_URL}/product/${update.id}`,
        update.newData
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  `${process.env.API_URL}/product/delete`,
  async (id: string) => {
    try {
      const res = await axios.delete(`${process.env.API_URL}/product/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: [],
    isFetching: false,
    error: false,
  } as ProductState,

  reducers: {},

  extraReducers: builder => {
    builder.addCase(getProduct.pending, state => {
      state.isFetching = false;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isFetching = true;
      state.product = action.payload;
    });
    builder.addCase(addProduct.pending, state => {
      state.isFetching = false;
    });
    builder.addCase(addProduct.fulfilled, state => {
      state.isFetching = true;
    });

    builder.addCase(updateProduct.pending, state => {
      state.isFetching = false;
    });
    builder.addCase(updateProduct.fulfilled, state => {
      state.isFetching = true;
    });
    builder.addCase(deleteProduct.pending, state => {
      state.isFetching = false;
    });
    builder.addCase(deleteProduct.fulfilled, state => {
      state.isFetching = true;
    });
  },
});

export const { productReducer } = productSlice.actions;

export default productSlice.reducer;
