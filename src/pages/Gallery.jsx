import { useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";
import GalleryCard from "../components/GalleryCard";
import SearchBar from "../components/SearchBar";
import { UseUserAuth } from "../context/authContext";
import useFetch from "../hooks/useFetch";

const Gallery = () => {
  //   const API_KEY = "QcQ4xKb1dLax6dKMAmm91nlWS3VozNJevDf56WBkNzuDESChpjfySdo2";
  //   const url = `https://api.pexels.com/v1/curated?per_page=10`;
  const url = `https://api.pexels.com/v1/curated?per_page=12`;

  const { loading, data, error } = useFetch(url);
  const { user, logout } = UseUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log(`${user.email} logged out`);
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(data);
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
        {/* <h1>Pexels Gallery</h1> */}
        {loading && <Loading />}
        {error && <p>Error: {error.message}</p>}
        {!loading && !error && (
          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-12">
            {data.map((images) => {
              return <GalleryCard key={images.id} {...images} />;
            })}
          </section>
        )}
      </section>
    </main>
  );
};

export default Gallery;
