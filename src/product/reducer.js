import {fromJS} from 'immutable';
import actionTypes from './constants';

const DEFAULT_NAME = 'Unknown';
const DEFAULT_IMAGE_URL = 'http://via.placeholder.com/150x150';

export const initialState = {
  id: null,
  name: DEFAULT_NAME,
  imageUrl: DEFAULT_IMAGE_URL,
  description: '',
  price: 0,
  offerType: 'NO_OFFER'
};

export default (state = fromJS(initialState), {type, payload = {}} = {}) => {

  switch (type) {
    case actionTypes.SET_PRODUCT:
      return state.withMutations(map => {
        map
          .set('id', payload.id || initialState.id)
          .set('name', payload.name || initialState.name)
          .set('description', payload.description || initialState.description)
          .set('imageUrl', payload.image_url || initialState.imageUrl)
          .set('price', payload.price || initialState.price)
          .set('offerType', payload.offer_type || initialState.offerType);
      });

    default:
      return state;
  }
};
