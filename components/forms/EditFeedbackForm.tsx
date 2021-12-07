import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import Button from '../global/Button';
import { productRequestState } from '../../lib/atoms';

interface IProps {
  feedback: {
    id: number;
    title: string;
    category: string;
    status: string;
    description: string;
    upvotes?: number;
    comments?: {
      id: number;
      content: string;
      user: { image: string; name: string; username: string };
      replies?: {
        content: string;
        replyingTo: string;
        user: { image: string; name: string; username: string };
      }[];
    }[];
  };
}

interface IData {
  id: number;
  title: string;
  category: string;
  status: string;
  description: string;
  upvotes: number;
  comments?: {
    id: number;
    content: string;
    user: { image: string; name: string; username: string };
    replies?: {
      content: string;
      replyingTo: string;
      user: { image: string; name: string; username: string };
    }[];
  }[];
}

const EditFeedbackForm = ({ feedback }: IProps) => {
  const { register, handleSubmit } = useForm();
  const [feedbackData, setFeedbackData] = useRecoilState(productRequestState);
  const router = useRouter();

  // to do: add delete and cancel button functionality

  const onSubmit = (data: IData) => {
    const tempRequest = feedbackData.map((singleFeedback) => {
      data.id = feedback.id;
      data.upvotes = feedback.upvotes || 0;
      data.comments = feedback.comments || [];
      if (singleFeedback.id === data.id) {
        return data;
      } else {
        return singleFeedback;
      }
    });
    setFeedbackData(tempRequest);
    router.back();
  };

  // to do add confirmation popup for deleting feedback
  // event handler for delete button
  const onDelete = () => {
    const listWithoutDeletedFeedback = feedbackData.filter(
      (individualFeedback) => {
        if (individualFeedback.id !== feedback.id) {
          return individualFeedback;
        }
      }
    );
    setFeedbackData(listWithoutDeletedFeedback);
    router.push('/');
    console.log('deleted');
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
        defaultValue={feedback.category}
        {...register('category')}
      >
        <option value='ui'>UI</option>
        <option value='ux'>UX</option>
        <option value='enhancement'>Enhancement</option>
        <option value='bug'>Bug</option>
        <option value='feature'>Feature</option>
      </select>

      {/* Update status input */}
      <label className='text-sm text-text-secondary font-bold mb-1'>
        Update Status
      </label>
      <p className='text-text-secondary-light text-sm mb-4'>
        Update Feature state
      </p>
      <select
        defaultValue={feedback.status}
        className='mb-6 bg-text-grey rounded-md'
        {...register('status')}
      >
        <option value='suggestion'>Suggestion</option>
        <option value='planned'>Planned</option>
        <option value='in-progress'>In-Progress</option>
        <option value='live'>Live</option>
      </select>

      {/* Description Input */}
      <label className='text-sm text-text-secondary font-bold mb-1'>
        Feedback Detail
      </label>
      <p className='text-text-secondary-light text-sm mb-4'>
        Include any specific comments on what should be improved, added, etc.
      </p>
      <textarea
        style={{ resize: 'none' }}
        required
        defaultValue={feedback.description}
        className='bg-text-grey mb-6 rounded-md'
        {...register('description')}
        cols={30}
        rows={5}
      ></textarea>
      <div className='flex flex-col md:flex-row-reverse md:justify-between gap-y-4'>
        <div className='w-full md:w-max'>
          <Button
            type='submit'
            content='Save Changes'
            color='primary'
            size='small'
            cursor='pointer'
          />
        </div>
        <div
          className='w-full md:w-max md:pr-4'
          onClick={() => {
            router.back();
          }}
        >
          <Button
            type='button'
            content='Cancel'
            color='secondary'
            size='small'
            cursor='pointer'
          />
        </div>
        <div className='w-full' onClick={onDelete}>
          <Button
            type='button'
            content='Delete'
            color='red'
            size='small'
            cursor='pointer'
          />
        </div>
      </div>
    </form>
  );
};

export default EditFeedbackForm;
