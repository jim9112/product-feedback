import SingleComment from '../global/SingleComment';

interface IProps {
  comments: {
    id: number;
    content: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
  }[];
}

const Comments = ({ comments }: IProps) => {
  return (
    <div className='bg-text-white text-sm p-6 rounded-xl'>
      <h1 className='font-bold text-lg text-text-secondary'>
        {comments.length} Comments
      </h1>
      <div className='divide-y-2 divide-solid divide-text-grey'>
        {comments &&
          comments.map((comment) => (
            <SingleComment key={comment.id} comment={comment} />
          ))}
      </div>
    </div>
  );
};

export default Comments;
