import { Slider } from "rsuite";

type Props = {
  rating: number;
  title: string;
};

const ReviewsContainer = ({ rating, title }: Props) => {
  return (
    <div className="flex w-full items-center justify-between gap-4">
      <p className="w-[120px]">{title}</p>
      <div className="flex-1 flex items-center gap-5  ">
        <Slider
          className="flex-1"
          readOnly
          defaultValue={rating}
          min={0}
          max={5}
          progress
        />
        <p className="w-[8%] flex justify-end">{rating}</p>
      </div>
    </div>
  );
};

export default ReviewsContainer;
