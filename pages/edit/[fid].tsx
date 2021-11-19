import useGetProductFeedback from '../../lib/hooks/useGetProductFeedback';
import Image from 'next/image';
import { productRequestState } from '../../lib/atoms';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import BackButton from '../../components/global/BackButton';
import editIcon from '../../public/shared/icon-edit-feedback.svg';
import { useEffect } from 'react';
const FeedbackToEdit = () => {
  // get product requests from state
  const productRequests = useRecoilValue(productRequestState);
  // get query from router
  const router = useRouter();
  const { fid }: any = router.query;
  // get individual feedback based on selection and router query
  const { feedback } = useGetProductFeedback(productRequests, fid);

  return (
    <div className='bg-text-grey min-h-screen px-6 md:px-28 pt-8 md:pt-14'>
      <div className='lg:w-[540px] lg:mx-auto'>
        <div className='mb-16'>
          <BackButton color='dark' />
        </div>
        <div className='relative bg-text-white rounded-lg px-6 md:px-10 pb-6 md:pb-11'>
          <div className='relative -top-7'>
            <Image src={editIcon} alt='Add Icon' width='56px' height='56px' />
          </div>
          <h1>Editing `{feedback?.title}`</h1>
        </div>
      </div>
    </div>
  );
};

export default FeedbackToEdit;
