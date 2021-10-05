import { useEffect, useState } from 'react';

const useGetStatusCount = (productRequests: { status: string }[]) => {
  const [statusCount, setStatusCount] = useState<Record<string, number>>();
  useEffect(() => {
    const tempStatus: Record<string, number> = {};
    productRequests.forEach((element: { status: string }) => {
      if (tempStatus[element.status]) {
        tempStatus[element.status] += 1;
      } else {
        tempStatus[element.status] = 1;
      }
    });
    setStatusCount(tempStatus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { statusCount };
};

export default useGetStatusCount;
