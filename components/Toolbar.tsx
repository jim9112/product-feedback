import Button from './Button';

const Toolbar = () => {
  return (
    <div className='bg-bg-dark'>
      <label className='text-text-grey' htmlFor='sortOptions'>
        Sort by:
        <select
          className='bg-bg-dark text-text-white'
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
        // cursor='pointer'
        size='small'
      />
    </div>
  );
};

export default Toolbar;
