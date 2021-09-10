const Toolbar = () => {
  return (
    <div>
      <label htmlFor='sortOptions'>
        Sort by:
        <select name='sortOptions' id='sortOptions'>
          <option value='mostUpvotes'>Most Upvotes</option>
          <option value='leastUpvotes'>Least Upvotes</option>
          <option value='mostComments'>Most Comments</option>
          <option value='leastComments'>Least Comments</option>
        </select>
      </label>
    </div>
  );
};

export default Toolbar;
