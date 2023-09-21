import { Loader } from "../common/Icon";

const Loading = () => {
  const SPINNER_WIDTH = 50;
  const SPINNER_HEIGHT = 50;
  return (
    <div className="flex justify-center items-center   ">
      <Loader
        className="animate-spin h-12 w-12"
        width={SPINNER_WIDTH}
        height={SPINNER_HEIGHT}
      />
    </div>
  );
};

export default Loading;
