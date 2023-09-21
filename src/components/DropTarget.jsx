import { useDrop } from "react-dnd";
import DraggableGalleryCard from "./GalleryCard";

const DropTarget = ({ cards, onDrop }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "GALLERY_CARD",
    drop: (item) => onDrop(item.images),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

  return (
    <div ref={drop} className={`drop-target ${isActive ? "active" : ""}`}>
      {cards.map((card, index) => (
        <DraggableGalleryCard key={index} images={card} />
      ))}
    </div>
  );
};

export default DropTarget;
