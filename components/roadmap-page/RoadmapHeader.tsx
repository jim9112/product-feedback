import BackButton from '../global/BackButton';
import Button from '../global/Button';

const RoadmapHeader = () => {
  return (
    <header className='bg-bg-dark px-5 py-6 flex justify-between'>
      <div>
        <BackButton color='light' />
        <h1 className='text-text-white font-bold text-lg'>Roadmap</h1>
      </div>
      <Button
        type='button'
        color='primary'
        content='+ Add Feedback'
        size='small'
        clickAction='addFeedback'
        cursor='pointer'
      />
    </header>
  );
};

export default RoadmapHeader;
