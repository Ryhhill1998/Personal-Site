const TimelineDate = ({ date, fade }) => {
  return (
    <span data-aos={fade} data-aos-duration="1000">
      {date}
    </span>
  );
};

export default TimelineDate;
