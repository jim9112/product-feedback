import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Button from '../global/Button';

interface IProps {
  feedback: {
    title: string;
    category: string;
  };
}

const EditFeedbackForm = ({ feedback }: IProps) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('Submitted');
  };
  return (
    <form className='grid grid-flow-row' onSubmit={handleSubmit(onSubmit)}>
      {/* Title Input */}
      <label className='text-sm text-text-secondary font-bold mb-1'>
        {' '}
        Feedback Title
      </label>
      <p className='text-text-secondary-light text-sm mb-4'>
        Add a short, descriptive headline
      </p>
      <input
        className='bg-text-grey mb-6 rounded-md'
        defaultValue={feedback.title}
        required
        {...register('title')}
      />

      {/* Category Input */}
      <label className='text-sm text-text-secondary font-bold mb-1'>
        Category
      </label>
      <p className='text-text-secondary-light text-sm mb-4'>
        Choose a category for your feedback
      </p>
      <select
        className='mb-6 bg-text-grey rounded-md'
        {...register('category')}
      >
        <option
          selected={feedback.category.toLowerCase() === 'ui' ? true : false}
          value='UI'
        >
          UI
        </option>
        <option
          selected={feedback.category.toLowerCase() === 'ux' ? true : false}
          value='UX'
        >
          UX
        </option>
        <option
          selected={
            feedback.category.toLowerCase() === 'enhancement' ? true : false
          }
          value='Enhancement'
        >
          Enhancement
        </option>
        <option
          selected={feedback.category.toLowerCase() === 'bug' ? true : false}
          value='Bug'
        >
          Bug
        </option>
        <option
          selected={
            feedback.category.toLowerCase() === 'feature' ? true : false
          }
          value='Feature'
        >
          Feature
        </option>
      </select>

      {/* Update status input */}
      <label className='text-sm text-text-secondary font-bold mb-1'>
        Update Status
      </label>
      <p className='text-text-secondary-light text-sm mb-4'>
        Update Feature state
      </p>
      <select className='mb-6 bg-text-grey rounded-md' {...register('status')}>
        <option value='suggestion'>Suggestion</option>
        <option value='planned'>Planned</option>
        <option value='in-progress'>In-Progress</option>
        <option value='live'>Live</option>
      </select>
      <label className='text-sm text-text-secondary font-bold mb-1'>
        Feedback Detail
      </label>
      <p className='text-text-secondary-light text-sm mb-4'>
        Include any specific comments on what should be improved, added, etc.
      </p>
      <textarea
        style={{ resize: 'none' }}
        required
        className='bg-text-grey mb-6 rounded-md'
        {...register('description')}
        cols={30}
        rows={5}
      ></textarea>
      <div className='flex flex-col gap-y-4'>
        <Button
          type='submit'
          content='Save Changes'
          color='primary'
          size='small'
        />
        <Button type='button' content='Cancel' color='secondary' size='small' />
      </div>
    </form>
  );
};

export default EditFeedbackForm;
