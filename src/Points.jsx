import { useRef, useState } from "react";
import Draggable from "react-draggable";

function Points({ handleStop, dropZones }) {
  const numbers = [5, 10, 15, 20, 25, 30, 35];
  const refs = useRef([]);
  const [dragging, setDragging] = useState(false);
  const [draggingText, setDraggingText] = useState("");
  const [draggingIndex, setDraggingIndex] = useState(null);

  const startDrag = (index) => {
    setDragging(true);
    setDraggingText(refs.current[index].textContent);
    setDraggingIndex(index);
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
    <div className="bg-slate-400">
      <div className="flex space-x-3  p-1 ml-12">
        {numbers.map((number, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className="border border-gray-500 p-2 rounded-md text-white size-10 text-center cursor-pointer"
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
          <div className="border border-gray-500 p-2 text-white size-10 text-center absolute top-1 left-0 bg-red-500 rounded-full">
            {draggingText}
          </div>
        </Draggable>
      )}
    </div>
  );
}

export default Points;
