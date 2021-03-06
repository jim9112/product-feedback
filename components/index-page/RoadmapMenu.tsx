import Link from 'next/link';

interface IProps {
  statusCount: Record<string, number> | undefined;
}

const RoadmapMenu = ({ statusCount }: IProps) => {
  return (
    <div className='bg-text-white rounded-lg p-6 sm:h-full'>
      <div>
        <div className='flex place-content-between items-center mb-6'>
          <h2 className='font-bold text-lg text-text-secondary'>Roadmap</h2>
          {/* To Do: Change to a link */}
          <Link href='/roadmap'>
            <a className='text-text-blue underline font-semibold text-sm'>
              View
            </a>
          </Link>
        </div>
        <ul className='text-text-secondary-light flex flex-col gap-y-2'>
          <li className='flex items-center relative'>
            <div className='w-2 h-2 bg-orangish rounded-full mr-4'></div>
            <span>Planned </span>
            <span className='absolute right-0 font-bold'>
              {statusCount && statusCount.planned ? statusCount.planned : 0}
            </span>
          </li>
          <li className='flex items-center relative'>
            <div className='w-2 h-2 bg-button-primary rounded-full mr-4'></div>
            <span>In-Progress</span>
            <span className='absolute right-0 font-bold'>
              {statusCount && statusCount['in-progress']
                ? statusCount['in-progress']
                : 0}
            </span>
          </li>
          <li className='flex items-center relative'>
            <div className='w-2 h-2 bg-sky-blue rounded-full mr-4'></div>
            <span>Live</span>
            <span className='absolute right-0 font-bold'>
              {statusCount && statusCount.live ? statusCount.live : 0}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoadmapMenu;
