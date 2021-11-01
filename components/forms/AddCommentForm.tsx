import { useForm } from 'react-hook-form';
import Button from '../global/Button';
import { IFeedback } from '../../lib/typesInterface';
import useAddComment from '../../lib/hooks/useAddComment';

interface IProps {
  feedback: IFeedback;
}

const AddCommentForm = ({ feedback }: IProps) => {
  const { register, handleSubmit, watch, reset, formState } = useForm({
    defaultValues: { comment: '' },
  });

  // custom hook to handle form submit
  const onSubmit = useAddComment(feedback, formState, reset);

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
