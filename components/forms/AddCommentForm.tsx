import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../global/Button';
import { IFeedback } from '../../lib/typesInterface';
import { currentUserState, productRequestState } from '../../lib/atoms';
import { useRecoilState, useRecoilValue } from 'recoil';

interface IProps {
  feedback: IFeedback;
}

interface IFormInput {
  comment: string;
}

const AddCommentForm = ({ feedback }: IProps) => {
  const { register, handleSubmit, watch } = useForm();
  const currentUser = useRecoilValue(currentUserState);
  const [feedbackState, setFeedbackState] = useRecoilState(productRequestState);

  //   To Do: save form data to state
  const onSubmit = (data: IFormInput) => {
    // temporary object with currently selected feedback
    const tempObj = { ...feedback };

    // create new comment object with form data
    const newComment = {
      id: Date.now(),
      content: data.comment,
      user: currentUser,
    };

    // iff a comment array exisists update with new comment else create new array with comment
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

  //   watch the comment field of form to get amount of characters used
  let commentData = watch('comment', '');

  return (
    <div className='bg-text-white p-6 rounded-xl'>
      <h1 className='text-lg text-text-secondary font-bold mb-6'>
        Add Comment
      </h1>
      <form className='' onSubmit={handleSubmit(onSubmit)}>
        <textarea
          style={{ resize: 'none' }}
          placeholder='Type your comment here'
          className='bg-text-grey text-text-secondary-light rounded-md w-full h-20 p-4'
          {...register('comment', { required: true, maxLength: 250 })}
        />
        <div className='flex items-center justify-between mt-4'>
          <p className='text-sm text-text-secondary'>
            {250 - commentData.length} Characters left
          </p>
          <Button
            type='submit'
            size='small'
            color='primary'
            content='Post Comment'
          />
        </div>
      </form>
    </div>
  );
};

export default AddCommentForm;
