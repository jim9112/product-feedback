import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { productRequestState } from '../../lib/atoms';

interface IRequests {
  status: string;
  title: string;
  id: number;
}
interface ITempObj {
  planned: Array<IRequests>;
  progress: Array<IRequests>;
  live: Array<IRequests>;
}

const useSortRoadmapRequests = () => {
  // get product requests from state
  const productRequests = useRecoilValue<IRequests[] | null>(
    productRequestState
  );
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
