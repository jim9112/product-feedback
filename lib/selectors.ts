import { selector } from 'recoil';
import {
  productRequestState,
  productRequestFilterState,
  tagFilterState,
} from './atoms';

// This state is the sorted product feedback list based on the dropdown selection
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

// This state combines the sorted state with the category filters to output a filtered and sorted list
export const categoryProductRequestState = selector({
  key: 'categoryProductRequestState',
  get: ({ get }) => {
    const requestList = get(filteredProductRequestState);
    const listFilter = get(tagFilterState);
    if (listFilter === 'All') {
      return requestList;
    } else {
      const newList = requestList?.filter((request) => {
        if (listFilter.toLowerCase() === request.category) {
          return request;
        }
      });
      return newList;
    }
  },
});
