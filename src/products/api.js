import request from 'superagent';
import {PRODUCTS_URL, CONTENT_TYPE} from './constants';

export const fetchProducts = () => {
  return request
    .get(PRODUCTS_URL)
    .type(CONTENT_TYPE);
};
