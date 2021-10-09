import { atom } from 'recoil';
import data from './content/data.json';

// state for all of the product requests
export const productRequestState = atom({
  key: 'productRequestState',
  default: data.productRequests,
});

// state that holds any filters being applied to the product request display
export const productRequestFilterState = atom({
  key: 'productRequestFilterState',
  default: 'Most Upvotes',
});

// state that holds any tag filters being applied to the product request display
export const tagFilterState = atom({
  key: 'tagFilterState',
  default: 'all',
});
