import { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";
import GalleryCard from "../components/GalleryCard";
import useFetch from "../hooks/useFetch";

const SearchResult = () => {
  const { query } = useParams();
  const searchUrl = `https://api.pexels.com/v1/search?query=${query}&per_page=12`;

  const { loading, data, error } = useFetch(searchUrl);
  // console.log(data);

  const [images, setImages] = useState([]);
  const [dragItemIndex, setDragItemIndex] = useState();
  const [dragOverItemIndex, setDragOverItemIndex] = useState();

  const handleDragStart = (index) => {
    setDragItemIndex(index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (draggedIndex, targetIndex, draggedImage) => {
    const _images = [...images];
    const dragItem = _images.splice(draggedIndex, 1)[0];
    _images.splice(targetIndex, 0, dragItem);
    setImages(_images);
  };

  const handleDragEnter = (index) => {
    setDragOverItemIndex(index);
  };

  const handleDragLeave = (event) => {
    setDragOverItemIndex(undefined);
  };

  const handleDragEnd = (event) => {
    setDragItemIndex(undefined);
    setDragOverItemIndex(undefined);
  };

  useEffect(() => {
    if (data) {
      setImages(data);
    }
  }, [data]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  console.log("SEARCH images: ", images);

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
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-12">
          <DndProvider backend={HTML5Backend}>
            {images.map((image, index) => {
              return (
                <GalleryCard
                  key={image.id}
                  image={image}
                  index={index}
                  dragItemIndex={dragItemIndex}
                  dragOverItemIndex={dragOverItemIndex}
                  handleDragStart={handleDragStart}
                  handleDragOver={handleDragOver}
                  handleDrop={handleDrop}
                  handleDragEnter={handleDragEnter}
                  handleDragLeave={handleDragLeave}
                  handleDragEnd={handleDragEnd}
                />
              );
            })}
          </DndProvider>
        </section>
      )}
    </section>
  );
};

export default SearchResult;
