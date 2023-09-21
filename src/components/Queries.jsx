import { Link } from "react-router-dom";
import Tag from "./Tag";

const HardcodedQueries = () => {
  const hardCodedQueries = ["lion", "cars", "tiger", "nature"];

  return (
    <div className="flex space-x-4 my-4">
      {hardCodedQueries.map((query) => (
        <Link to={`/search/${query}`} key={query}>
          <Tag tagText={query} />
        </Link>
      ))}
    </div>
  );
};

export default HardcodedQueries;
