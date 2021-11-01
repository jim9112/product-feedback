import SingleComment from './SingleComment';

interface IProps {
  replies: {
    id: number;
    content: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
  }[];
}

const Replies = ({ replies }: IProps) => {
  return (
    <div className='border-l-2 border-text-grey pl-6'>
      {replies.map((reply) => (
        <SingleComment key={reply.id} comment={reply} />
      ))}
    </div>
  );
};

export default Replies;
