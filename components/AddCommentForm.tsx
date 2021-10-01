import { useForm, SubmitHandler } from 'react-hook-form';
import Button from './Button';

interface IFormInput {
  comment: string;
}

const AddCommentForm = () => {
  const { register, handleSubmit, watch } = useForm();

  //   To Do: save form data to state
  const onSubmit = (data: IFormInput) => console.log(data);

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
