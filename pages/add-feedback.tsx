import Link from 'next/link';
import AddEditFeedbackForm from '../components/AddEditFeedbackForm';

const addFeedback = () => {
  return (
    <div className='bg-text-grey min-h-screen px-6'>
      <div>
        <Link href='/'>Go Back</Link>
      </div>
      <div className='bg-text-white p-6'>
        <h1 className='font-bold text-text-secondary text-lg'>
          Create New Feedback
        </h1>
        <AddEditFeedbackForm />
      </div>
    </div>
  );
};

export default addFeedback;
