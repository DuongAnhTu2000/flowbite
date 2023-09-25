import { PayloadAction, createSlice, Slice } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  stock: string;
  description: string;
  price: string;
}

interface ProductState {
  product: Product[];
  isFetching: boolean;
  error: boolean;
}

const initialState: ProductState = {
  product: [],
  isFetching: false,
  error: false,
};

export const productSlice: Slice<ProductState> = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProducts: state => {
      state.isFetching = true;
    },
    getProductsSuccess: (state, { payload }: PayloadAction<Product[]>) => {
      state.product = payload;
      state.isFetching = false;
      state.error = false;
    },
    getProductsFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    addProductsPending: state => {
      state.isFetching = true;
    },
    addProduct: (state, action) => {
      state.isFetching = false;
      state.product.push(action.payload);
    },
    addProductFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    updateProductsPending: state => {
      state.isFetching = true;
    },
    updateProduct: (state, { payload }: PayloadAction<Product>) => {
      const index = state.product.findIndex(item => item.id === payload.id);
      state.product[index] = payload;
    },
    updateFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    deleteProductsPending: state => {
      state.isFetching = true;
    },
    deleteProduct: (state, { payload }: PayloadAction<number>) => {
      const index = state.product.findIndex(item => item.id === payload);
      state.product.splice(index, 1);
    },
    deleteFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = productSlice.actions;

export default productSlice.reducer;
