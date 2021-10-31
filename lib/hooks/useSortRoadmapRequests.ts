import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { productRequestState } from '../../lib/atoms';
import { IFeedback } from '../typesInterface';

interface ITempObj {
  planned: Array<IFeedback>;
  progress: Array<IFeedback>;
  live: Array<IFeedback>;
}

const useSortRoadmapRequests = () => {
  // get product requests from state
  const productRequests = useRecoilValue<IFeedback[] | undefined>(
    productRequestState
  );

  // state for three status categories of for roadmap display
  const [roadmapState, setRoadmapState] = useState<ITempObj | null>(null);

  useEffect(() => {
    // temporary object to sort requests into

    const tempObj: ITempObj = {
      planned: [],
      progress: [],
      live: [],
    };

    // sort request into temmporary object based on their status
    productRequests?.forEach((request) => {
      if (request.status === 'in-progress') {
        tempObj.progress.push(request);
      } else if (request.status === 'planned') {
        tempObj.planned.push(request);
      } else if (request.status === 'live') {
        tempObj.live.push(request);
      }
    });

    // set sorted requests into state
    setRoadmapState({ ...tempObj });
  }, [productRequests]);

  return { roadmapState };
};

export default useSortRoadmapRequests;
