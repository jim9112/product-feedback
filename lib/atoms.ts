import { atom } from 'recoil';
import data from './content/data.json';

export const productRequestState = atom({
  key: 'productRequestState',
  default: data.productRequests,
});
