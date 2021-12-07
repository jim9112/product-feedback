import { useRouter } from 'next/router';
import BackButton from '../../components/global/BackButton';
import ProductRequest from '../../components/global/ProductRequest';
import Comments from '../../components/individual-feedback-page/Comments';
import AddCommentForm from '../../components/forms/AddCommentForm';
import { useRecoilState } from 'recoil';
import { productRequestState } from '../../lib/atoms';
import useGetProductFeedback from '../../lib/hooks/useGetProductFeedback';
import Button from '../../components/global/Button';

const Feedback = () => {
  // get product requests from state
  const [productRequests, setProductRequests] =
    useRecoilState(productRequestState);

  // get query from router
  const router = useRouter();
  const { cid }: any = router.query;

  // get individual feedback based on selection and router query
  const { feedback } = useGetProductFeedback(productRequests, cid);

  return (
    <div className='bg-text-grey'>
      <div className=' min-h-screen p-6 lg:py-20 lg:px-80 md:p-10 xl:m-auto xl:max-w-[650px] xl:px-0'>
        <div className='mb-8 flex justify-between items-center'>
          <BackButton color='dark' />
          <div onClick={() => router.push(`/edit/${cid}`)}>
            <Button
              color='lightBlue'
              size='small'
              type='button'
              content='Edit Feedback'
              cursor='pointer'
            />
          </div>
        </div>
        <div className='flex flex-col gap-y-6'>
          {feedback && <ProductRequest request={feedback} />}
          {feedback?.comments && (
            <Comments comments={feedback.comments || null} />
          )}
          {feedback && <AddCommentForm feedback={feedback} />}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
