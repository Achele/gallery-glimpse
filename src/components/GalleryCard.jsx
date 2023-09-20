import { useState } from "react";
import { Link } from "react-router-dom";

const GalleryCard = (images) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      className="relative transition-transform hover:scale-105 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="border-2 rounded bg-black">
        <img src={images.src.portrait} alt={images.photographer} />
      </div>
      {/* {isHovered && ( */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-80" : "opacity-0"
        }`}
      >
        <span className="text-white text-center">
          <h3 className="text-lg font-bold">{images.photographer}</h3>
          <Link href={images.url}>{images.url}</Link>
        </span>
      </div>
      {/* )} */}
    </section>
  );
};

export default GalleryCard;
