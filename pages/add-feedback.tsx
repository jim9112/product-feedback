import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';

const addFeedback = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className='bg-text-grey min-h-screen px-6'>
      <div>
        <Link href='/'>Go Back</Link>
      </div>
      <div className='bg-text-white p-6'>
        <h1 className='font-bold text-text-secondary text-lg'>
          Create New Feedback
        </h1>
        <form className='grid grid-flow-row' onSubmit={handleSubmit(onSubmit)}>
          <label className='text-sm text-text-secondary font-bold'>
            {' '}
            Feedback Title
          </label>
          <p className='text-text-secondary-light text-sm'>
            Add a short, descriptive headline
          </p>
          <input className='bg-text-grey' {...register('feedbackTitle')} />
          <label className='text-sm text-text-secondary font-bold'>
            Category
          </label>
          <p className='text-text-secondary-light text-sm'>
            Choose a category for your feedback
          </p>
          <select {...register('category')}>
            <option value='UI'>UI</option>
            <option value='UX'>UX</option>
            <option value='Enhancement'>Enhancement</option>
            <option value='Bug'>Bug</option>
            <option value='Feature'>Feature</option>
          </select>
          <label className='text-sm text-text-secondary font-bold'>
            Feedback Detail
          </label>
          <p className='text-text-secondary-light text-sm'>
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea
            className='bg-text-grey'
            {...register('feedbackDetail')}
            cols={30}
            rows={10}
          ></textarea>
          <input type='submit' />
        </form>
      </div>
    </div>
  );
};

export default addFeedback;
