import SingleComment from './SingleComment';

interface IProps {
  comments: {
    id: number;
  }[];
}

const Comments = ({ comments }: IProps) => {
  console.log(comments);
  return (
    <div className='bg-text-white text-sm p-6 rounded-xl'>
      <h1 className='font-bold text-lg text-text-secondary'>
        {comments.length} Comments
      </h1>
      <div>
        {comments &&
          comments.map((comment) => (
            <SingleComment key={comment.id} comment={comment} />
          ))}
      </div>
    </div>
  );
};

export default Comments;
