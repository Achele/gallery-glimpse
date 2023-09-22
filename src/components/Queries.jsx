import { Link } from "react-router-dom";
import Tag from "./Tag";

const Queries = () => {
  const hardCodedQueries = [
    "lion",
    "cars",
    "tiger",
    "nature",
    "shoe",
    "babies",
    "phone",
    "light",
    "book",
    "gowns",
    "food",
    "cream",
    "countries",
    "park",
    "birds",
    "house",
    "beach",
    "Train",
    "Chairs",
  ];

  return (
    <div className="my-4 px-4 lg:text-center">
      {/* // <div className="grid xs:grid-cols-4 xs:gap-0 xs:p-4 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-10 xl:gap-x-0"> */}
      {hardCodedQueries.map((query) => (
        <span
          className="col-span-1 gap-x-0 lg:mx-2 md:mx-1 sm:mx-1"
          key={query}
        >
          <Link to={`/search/${query}`}>
            <Tag tagText={query} />
          </Link>
        </span>
      ))}
    </div>
  );
};

export default Queries;
