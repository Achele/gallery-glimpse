import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";
import GalleryCard from "../components/GalleryCard";
import useFetch from "../hooks/useFetch";

const SearchResult = () => {
  const { query } = useParams();
  const searchUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=12`;

  const { loading, data, error } = useFetch(searchUrl);
  // console.log(data);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  console.log("SEARCH images: ", data);

  return (
    <section className="flex flex-col   p-8 mx-10 rounded-lg">
      <div className=" ">
        <button
          className="border border-indigo-500 rounded-full p-1 hover:bg-indigo-500 hover"
          onClick={handleClick}
        >
          &larr;{" "}
        </button>
      </div>
      <h2 className="font-bold py-4 pb-8 text-indigo-300 text-center text-xl">
        Search Results for <span className="text-gray-400">{`"${query}"`}</span>
      </h2>
      {loading && <Loading />}
      <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-12">
        {data.map((images) => (
          <GalleryCard key={images.id} {...images} />
        ))}
      </section>
    </section>
  );
};

export default SearchResult;
