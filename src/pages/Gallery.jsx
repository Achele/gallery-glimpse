import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";
import GalleryCard from "../components/GalleryCard";
import SearchBar from "../components/SearchBar";
import { UseUserAuth } from "../context/authContext";
import useFetch from "../hooks/useFetch";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { useState, useEffect } from "react";

const Gallery = () => {
  const url = `https://api.pexels.com/v1/curated?per_page=12`;

  const { loading, data, error } = useFetch(url);
  const { user, logout } = UseUserAuth();
  const navigate = useNavigate();
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

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log(`${user.email} logged out`);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(images);
  return (
    <main>
      <div className="flex items-center overflow-hidden relative w-full bg-indigo-100 py-12 px-8 my-0 mx-auto">
        <SearchBar />
        <button
          className={"text-indigo-600 hover:text-indigo-700 text-base pr-4"}
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
      <section className="w-4/5 my-0 mx-auto py-8 px-20">
        <DndProvider backend={HTML5Backend}>
          {loading && <Loading />}
          {error && <p>Error: {error.message}</p>}
          {!loading && !error && (
            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-12">
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
            </section>
          )}
        </DndProvider>
      </section>
    </main>
  );
};

export default Gallery;
