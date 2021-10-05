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
      case 'Least Upvotes':
        return mutatedList.sort((a, b) => {
          return a.upvotes - b.upvotes;
        });
      case 'Most Comments':
        return mutatedList.sort((a, b) => {
          return (b.comments?.length || 0) - (a.comments?.length || 0);
        });
      case 'Least Comments':
        return mutatedList.sort((a, b) => {
          return (a.comments?.length || 0) - (b.comments?.length || 0);
        });
    }
  },
});
