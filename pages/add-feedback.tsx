import { useForm, SubmitHandler } from 'react-hook-form';

const addFeedback = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className='bg-text-grey min-h-screen'>
      <div className='bg-text-white'>
        <h1>Create New Feedback</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label> Feedback Title</label>
          <input className='bg-text-grey' {...register('feedbackTitle')} />
          <label>Category</label>
          <select {...register('category')}>
            <option value='UI'>UI</option>
            <option value='UX'>UX</option>
            <option value='Enhancement'>Enhancement</option>
            <option value='Bug'>Bug</option>
            <option value='Feature'>Feature</option>
          </select>
          <label>Feedback Detail</label>
          <textarea
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
