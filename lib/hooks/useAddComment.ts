import { Dispatch, SetStateAction, useEffect } from 'react';
import { FormState } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentUserState, productRequestState } from '../atoms';
import { IFeedback } from '../typesInterface';

interface IFormInput {
  comment: string;
}

const useAddComment = (
  feedback: IFeedback,
  formState: FormState<{ comment: string }>,
  reset: ({}) => void,
  commentType?: 'reply' | 'comment',
  commentId?: number,
  setFormDisplay?: Dispatch<SetStateAction<boolean>>
) => {
  // get current logged in user from state
  const currentUser = useRecoilValue(currentUserState);

  //   get all feedback from state
  const [feedbackState, setFeedbackState] = useRecoilState(productRequestState);

  // temporary object with currently selected feedback
  const tempObj = { ...feedback };

  const addToStateAndClose = () => {
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

    // close reply form if replying to comment
    if (setFormDisplay) setFormDisplay(false);
  };

  //  Called when someone comments on a feature request
  const addComment = (data: IFormInput) => {
    // create new comment object with form data
    const newComment = {
      id: Date.now(),
      content: data.comment,
      user: currentUser,
    };
    // if a comment array exisists update with new comment else create new array with comment
    if (feedback.comments) {
      tempObj.comments = [...feedback.comments, newComment];
    } else {
      tempObj.comments = [newComment];
    }

    // add to state and close form
    addToStateAndClose();
  };

  // called when someone replies to a comment
  const addReply = (data: IFormInput) => {
    // create new comment object with form data
    const newReply = {
      id: Date.now(),
      content: data.comment,
      replyingTo: '',
      user: currentUser,
    };
    // build a new comment object that inclueds the replies
    const tempComments = tempObj.comments?.map((element) => {
      // if comment id matches id cof comment being replied and a reply array exisits update it
      if (element.id === commentId && element.replies) {
        newReply.replyingTo = element.user.username;
        const newElement = { ...element };
        newElement.replies = [...element.replies, newReply];
        return newElement;
        // if ID matches and no reply array exsists create one and ad reply to it
      } else if (element.id === commentId && !element.replies) {
        newReply.replyingTo = element.user.username;
        console.log(element.user.username);
        const newElement = { ...element };
        newElement.replies = [newReply];
        return newElement;
        // else return origional comment object
      } else {
        return element;
      }
    });

    // add new comments array to temp object
    tempObj.comments = tempComments;

    // add to state and close form
    addToStateAndClose();
  };

  // submit function called from form
  const onSubmit = (data: IFormInput) => {
    if (commentType === 'comment') {
      addComment(data);
    } else if (commentType === 'reply') {
      addReply(data);
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
