interface IProps {
  statusCount: Record<string, number> | undefined;
}

const RoadmapMenu = ({ statusCount }: IProps) => {
  return (
    <div className='bg-text-white rounded-lg p-6 sm:h-full'>
      <div>
        <h2>Roadmap</h2>
        <p>view</p>
        <ul className='text-text-secondary-light'>
          <li>
            Planned{' '}
            {statusCount && statusCount.planned ? statusCount.planned : 0}
          </li>
          <li>
            In-Progress{' '}
            {statusCount && statusCount['in-progress']
              ? statusCount['in-progress']
              : 0}
          </li>
          <li>Live {statusCount && statusCount.live ? statusCount.live : 0}</li>
        </ul>
      </div>
    </div>
  );
};

export default RoadmapMenu;
