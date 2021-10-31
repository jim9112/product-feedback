import { useRecoilState, useRecoilValue } from 'recoil';
import { productRequestState, currentUserState } from '../atoms';
import { IFeedback } from '../typesInterface';

const useAddLike = (feedbackID: number) => {
  const [feedbackState, setFeedbackState] =
    useRecoilState<IFeedback[]>(productRequestState);
  const currentUser = useRecoilValue(currentUserState);

  const addLike = () => {
    // get index of current feature request
    let index = feedbackState.findIndex(
      (feedback) => feedback.id === feedbackID
    );

    // create temporary object with new upvote value
    const tempObj = { ...feedbackState[index] };
    tempObj.upvotes += 1;

    // check if feature request has a list of users who upvoted it. If not create one and add current users username
    if (tempObj.upvotedby) {
      tempObj.upvotedby.push(currentUser.username);
    } else {
      tempObj.upvotedby = [currentUser.username];
    }

    console.log(tempObj);

    // map feedbackstate into temp array replacing edited feature request with edited temp object
    const tempArr = feedbackState.map((feedback, i) =>
      i === index ? tempObj : feedback
    );

    setFeedbackState(tempArr);
  };

  return addLike;
};

export default useAddLike;
