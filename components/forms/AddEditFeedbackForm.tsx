import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../global/Button';

enum CategoryEnum {
  UI = 'ui',
  UX = 'UX',
  Enhancement = 'Enhancement',
  Bug = 'Bug',
  Feature = 'Feature',
}

interface IFormInput {
  feedbackTitle: string;
  feedbackDetail: string;
  category: CategoryEnum;
}

const AddEditFeedbackForm = () => {
  const { register, handleSubmit } = useForm();

  //   todo: use submit to save new data to state

  const onSubmit = (data: IFormInput) => console.log(data);
  return (
    <form className='grid grid-flow-row' onSubmit={handleSubmit(onSubmit)}>
      <label className='text-sm text-text-secondary font-bold mb-1'>
        {' '}
        Feedback Title
      </label>
      <p className='text-text-secondary-light text-sm mb-4'>
        Add a short, descriptive headline
      </p>
      <input
        className='bg-text-grey mb-6 rounded-md'
        {...register('feedbackTitle')}
      />
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
        <option value='UI'>UI</option>
        <option value='UX'>UX</option>
        <option value='Enhancement'>Enhancement</option>
        <option value='Bug'>Bug</option>
        <option value='Feature'>Feature</option>
      </select>
      <label className='text-sm text-text-secondary font-bold mb-1'>
        Feedback Detail
      </label>
      <p className='text-text-secondary-light text-sm mb-4'>
        Include any specific comments on what should be improved, added, etc.
      </p>
      <textarea
        style={{ resize: 'none' }}
        className='bg-text-grey mb-6 rounded-md'
        {...register('feedbackDetail')}
        cols={30}
        rows={5}
      ></textarea>
      <div className='flex flex-col gap-y-4'>
        <Button
          type='submit'
          content='Add Feedback'
          color='primary'
          size='small'
        />
        <Button type='button' content='Cancel' color='secondary' size='small' />
      </div>
    </form>
  );
};

export default AddEditFeedbackForm;
