import Image from 'next/image';
import BackButton from '../components/global/BackButton';
import AddEditFeedbackForm from '../components/forms/AddFeedbackForm';
import addIcon from '../public/shared/icon-new-feedback.svg';

const addFeedback = () => {
  return (
    <div className='bg-text-grey min-h-screen px-6 md:px-28 pt-8 md:pt-14'>
      <div className='lg:w-[540px] lg:mx-auto'>
        <div className='mb-16'>
          <BackButton color='dark' />
        </div>
        <div className='relative bg-text-white rounded-lg px-6 md:px-10 pb-6 md:pb-11'>
          <div className='relative -top-7'>
            <Image src={addIcon} alt='Add Icon' />
          </div>
          <h1 className='font-bold text-text-secondary text-lg mb-6'>
            Create New Feedback
          </h1>
          <AddEditFeedbackForm />
        </div>
      </div>
    </div>
  );
};

export default addFeedback;
