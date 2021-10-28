import { useRecoilState } from 'recoil';
import { productRequestState } from '../atoms';

const useAddLike = (feedbackID: number) => {
  const [feedbackState, setFeedbackState] = useRecoilState(productRequestState);
  const addLike = () => {
    // get index of current feature request
    let index = feedbackState.findIndex(
      (feedback) => feedback.id === feedbackID
    );

    // create temporary object with new upvote value
    const tempObj = { ...feedbackState[index] };
    tempObj.upvotes += 1;

    // map feedbackstate into temp array replacing edited feature request with edited temp object
    const tempArr = feedbackState.map((feedback, i) =>
      i === index ? tempObj : feedback
    );

    setFeedbackState(tempArr);
  };

  return addLike;
};

export default useAddLike;
