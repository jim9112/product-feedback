import Image from 'next/image';
import illustrationEmpty from '../../public/suggestions/illustration-empty.svg';
import Button from '../global/Button';

const NoFeedbackCard = () => {
  return (
    <div className='bg-text-white rounded-lg flex flex-col place-items-center py-20 md:py-28 px-6 md:px-36'>
      <div className='mb-10'>
        <Image src={illustrationEmpty} alt='No Feedback Found Illustration' />
      </div>
      <h1 className='font-bold text-text-secondary text-lg md:text-2xl mb-4'>
        There is no feedback yet.{' '}
      </h1>
      <p className='text-sm md:text-lg text-text-secondary-light text-center mb-6'>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Button
        type='button'
        content='+ Add Feedback'
        color='primary'
        size='small'
        cursor='pointer'
        clickAction='addFeedback'
      />
    </div>
  );
};

export default NoFeedbackCard;
