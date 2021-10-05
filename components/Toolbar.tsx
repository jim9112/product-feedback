import Image from 'next/image';
import Button from './Button';
import iconSuggestions from '../public/suggestions/icon-suggestions.svg';

interface IProps {
  suggestionAmount: number;
}

const Toolbar = ({ suggestionAmount }: IProps) => {
  return (
    <div className=''>
      <div className='bg-bg-dark px-6 py-2 sm:py-3 grid grid-flow-col items-center sm:rounded-lg'>
        <div className='hidden sm:flex items-center gap-x-4'>
          <div>
            <Image src={iconSuggestions} alt='Suggestions Icon' />
          </div>
          <h3 className='font-bold text-lg text-text-white'>
            {suggestionAmount} Suggestions
          </h3>
        </div>
        <label className='text-text-grey text-sm' htmlFor='sortOptions'>
          Sort by:
          <select
            className='bg-bg-dark text-text-white font-bold'
            name='sortOptions'
            id='sortOptions'
          >
            <option value='mostUpvotes'>Most Upvotes</option>
            <option value='leastUpvotes'>Least Upvotes</option>
            <option value='mostComments'>Most Comments</option>
            <option value='leastComments'>Least Comments</option>
          </select>
        </label>
        <Button
          type='button'
          content='+ Add Feedback'
          color='primary'
          cursor='pointer'
          size='small'
          clickAction='addFeedback'
        />
      </div>
    </div>
  );
};

export default Toolbar;
