import { useRef, useState } from "react";
import Draggable from "react-draggable";

function Points({ handleStop, dropZones }) {
  const numbers = [5, 10, 15, 20, 25, 30, 35];
  const refs = useRef([]);
  const [dragging, setDragging] = useState(false);
  const [draggingText, setDraggingText] = useState("");

  const startDrag = (index) => {
    setDragging(true);
    setDraggingText(refs.current[index].textContent);
  };

  const stopDrag = (e, data) => {
    const { x, y } = data;
    const dropZone = dropZones.find(
      (zone) =>
        x > zone.left &&
        x < zone.left + zone.width &&
        y > zone.top &&
        y < zone.top + zone.height
    );
    if (dropZone) {
      handleStop(draggingText, dropZone.playerIndex);
    }
    setDragging(false);
  };

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="flex justify-around p-1 ">
        {numbers.map((number, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className=" shadow-2xl bg-white  p-2 rounded-md text-gray-600 size-10 text-center cursor-pointer font-bold"
            onClick={() => startDrag(index)}
            onMouseUp={() => setDragging(false)}
            onTouchStart={() => startDrag(index)}
            onTouchEnd={() => setDragging(false)}
          >
            {number}
          </div>
        ))}
      </div>
      {dragging && (
        <Draggable onStop={stopDrag}>
          <div
            className="border cursor-pointer border-indigo-500 p-2 text-white size-14 text-center 
          absolute top-0 left-0 bg-red-500 rounded-full font-bold text-2xl z-10"
          >
            {draggingText}
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default Points;
