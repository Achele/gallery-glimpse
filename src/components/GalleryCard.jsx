import { useState } from "react";
import { Link } from "react-router-dom";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./constants";

const GalleryCard = (images, index, moveImage) => {
  const [, ref] = useDrag({
    type: ItemTypes.IMAGE,
    item: { index },
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      className="relative transition-transform hover:scale-105 cursor-move"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <div className="border-2 rounded bg-black">
        <img src={images.src.portrait} alt={images.photographer} />
      </div>

      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? "opacity-80" : "opacity-0"
        }`}
      >
        <span className="text-indigo-600 p-4">
          <h3 className="text-lg font-extrabold ">{images.photographer}</h3>
          <Link to={images.url} target="_blank">
            view more
          </Link>
        </span>
      </div>
    </section>
  );
};

export default GalleryCard;

//
/**
 * ======== RECENT ONE
 */

// // import { useState } from "react";
// // import { useDrag } from "react-dnd";
// // import { Link } from "react-router-dom";

// // const DraggableGalleryCard = (images) => {
// //   const [isHovered, setIsHovered] = useState(false);

// //   const handleMouseEnter = () => {
// //     setIsHovered(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsHovered(false);
// //   };

// //   const [{ isDragging }, drag] = useDrag({
// //     type: "GALLERY_CARD",
// //     item: { images },
// //     collect: (monitor) => ({
// //       isDragging: !!monitor.isDragging(),
// //     }),
// //   });

// //   return (
// //     <div
// //       ref={drag}
// //       className={`relative transition-transform hover:scale-105 ${
// //         isDragging ? "opacity-50" : ""
// //       }`}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //     >
// //       <div className="border-2 rounded bg-black">
// //         <img src={images.src.portrait} alt={images.photographer} />
// //       </div>

// //       <div
// //         className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
// //           isHovered ? "opacity-80" : "opacity-0"
// //         }`}
// //       >
// //         <span className="text-white text-center">
// //           <h3 className="text-lg font-bold">{images.photographer}</h3>
// //           <Link href={images.url}>{images.url}</Link>
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DraggableGalleryCard;

// import { useState } from "react";
// import { useDrag, useDrop } from "react-dnd";
// import { Link } from "react-router-dom";

// const GalleryCard = ({ images }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const [{ isDragging }, drag] = useDrag({
//     type: "GALLERY_CARD",
//     item: { images },
//     collect: (monitor) => ({
//       isDragging: !!monitor.isDragging(),
//     }),
//   });

//   const [{ canDrop, isOver }, drop] = useDrop({
//     accept: "GALLERY_CARD",
//     drop: (item) => onDrop(item.images),
//     collect: (monitor) => ({
//       isOver: monitor.isOver(),
//       canDrop: monitor.canDrop(),
//     }),
//   });

//   const isActive = canDrop && isOver;

//   return (
//     <div
//       ref={(node) => drag(drop(node))}
//       className={`relative transition-transform hover:scale-105 ${
//         isDragging ? "opacity-50" : ""
//       }`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="border-2 rounded bg-black">
//         <img src={images.src.portrait} alt={images.photographer} />
//       </div>

//       <div
//         className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
//           isHovered ? "opacity-80" : "opacity-0"
//         }`}
//       >
//         <span className="text-white text-center">
//           <h3 className="text-lg font-bold">{images.photographer}</h3>
//           <Link to={images.url}>{images.url}</Link>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default GalleryCard;
