import BackButton from '../components/global/BackButton';
import AddEditFeedbackForm from '../components/AddEditFeedbackForm';

const addFeedback = () => {
  return (
    <div className='bg-text-grey min-h-screen px-6 pt-8'>
      <div className='mb-8'>
        <BackButton color='dark' />
      </div>
      <div className='bg-text-white p-6'>
        <h1 className='font-bold text-text-secondary text-lg mb-6'>
          Create New Feedback
        </h1>
        <AddEditFeedbackForm />
      </div>
    </div>
  );
};

export default addFeedback;
