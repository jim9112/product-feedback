interface IPRops {
  request: {
    title: string;
  };
}

const RoadmapRequestCard = ({ request }: IPRops) => {
  return (
    <div>
      <h2>{request.title}</h2>
    </div>
  );
};

export default RoadmapRequestCard;
