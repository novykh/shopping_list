import keymirror from 'keymirror';

export default keymirror({
  START_FETCH_PRODUCTS: null,
  FINISH_FETCH_PRODUCTS: null,
  SET_PRODUCTS: null,
  SET_PRODUCTS_ERROR: null,
  REMOVE_PRODUCTS_ERROR: null
});

export const DEFAULT_ERROR = 'Something went wrong';
export const PRODUCTS_URL = 'http://localhost:3000/products.json';
export const CONTENT_TYPE = 'application/json';
