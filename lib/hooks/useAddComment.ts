import { useEffect } from 'react';
import { FormState } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserState, productRequestState } from '../atoms';
import { IFeedback, IComment } from '../typesInterface';

interface IFormInput {
  comment: string;
}

const useAddComment = (
  feedback: IFeedback,
  formState: FormState<{ comment: string }>,
  reset: ({}) => void,
  commentType?: 'reply' | 'comment',
  commentId?: number
) => {
  // get current logged in user from state
  const currentUser = useRecoilValue(currentUserState);

  //   get all feedback from state
  const [feedbackState, setFeedbackState] = useRecoilState(productRequestState);

  // temporary object with currently selected feedback
  const tempObj = { ...feedback };

  const addComment = (newComment: IComment) => {
    // if a comment array exisists update with new comment else create new array with comment
    if (feedback.comments) {
      tempObj.comments = [...feedback.comments, newComment];
    } else {
      tempObj.comments = [newComment];
    }

    // map feedback to a temporary array while updating comment section of current feedback
    const tempAllFeedback = feedbackState.map((el) => {
      if (el.id === feedback.id) {
        return tempObj;
      } else {
        return el;
      }
    });

    // update state
    setFeedbackState(tempAllFeedback);
  };

  const addReply = (newComment) => {
    const tempComments = tempObj.comments?.map((element) => {
      if (element.id === commentId && element.replies) {
        const newElement = { ...element };
        newElement.replies = [...element.replies, newComment];
        return newElement;
      } else if (element.id === commentId && !element.replies) {
        const newElement = { ...element };
        newElement.replies = [newComment];
        return newElement;
      } else {
        return element;
      }
    });

    tempObj.comments = tempComments;

    const tempAllFeedback = feedbackState.map((el) => {
      if (el.id === feedback.id) {
        return tempObj;
      } else {
        return el;
      }
    });

    // update state
    setFeedbackState(tempAllFeedback);
    // update state
    console.log(tempComments);
  };

  const onSubmit = (data: IFormInput) => {
    // create new comment object with form data
    const newComment = {
      id: Date.now(),
      content: data.comment,
      user: currentUser,
    };
    if (commentType === 'comment') {
      addComment(newComment);
    } else if (commentType === 'reply') {
      addReply(newComment);
    }
  };

  // reset form after successfull submit
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ comment: '' });
    }
  }, [formState, reset]);

  return onSubmit;
};

export default useAddComment;
