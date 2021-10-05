import { selector } from 'recoil';
import { productRequestState, productRequestFilterState } from './atoms';

export const filteredProductRequestState = selector({
  key: 'filteredProductRequestState',
  get: ({ get }) => {
    const requestList = get(productRequestState);
    const listFilter = get(productRequestFilterState);
    const mutatedList = [...requestList];
    switch (listFilter) {
      case 'Most Upvotes':
        return mutatedList.sort((a, b) => {
          return b.upvotes - a.upvotes;
        });
    }
  },
});
