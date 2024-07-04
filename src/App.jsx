import { useState } from "react";
import Points from "./Points";
import Users from "./Users";

function App() {
  const [userVals, setUserVals] = useState([0, 0, 0, 0]);
  const [history, setHistory] = useState([[], [], [], []]);
  const dropZones = [
    { left: 4, top: 105, width: 180, height: 60, playerIndex: 0 },
    { left: 4, top: 175, width: 180, height: 60, playerIndex: 1 },
    { left: 4, top: 245, width: 180, height: 60, playerIndex: 2 },
    { left: 4, top: 315, width: 180, height: 60, playerIndex: 3 },
  ];

  const handleStop = (value, playerIndex) => {
    const newUserVals = [...userVals];
    newUserVals[playerIndex] += parseInt(value, 10);
    setUserVals(newUserVals);

    const newHistory = [...history];
    newHistory[playerIndex].push(parseInt(value, 10));
    setHistory(newHistory);
  };

  const handleDelete = (playerIndex) => {
    const newHistory = [...history];

    const removedValue = newHistory[playerIndex].pop();
    setHistory(newHistory);

    const newUserVals = [...userVals];
    newUserVals[playerIndex] -= removedValue || 0;
    setUserVals(newUserVals);
  };

  return (
    <main className="relative">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-2xl text-center p-3 font-mono text-white font-bold">
        Domino Calculator
      </div>
      <Points handleStop={handleStop} dropZones={dropZones} />
      <Users userVals={userVals} onDelete={handleDelete} />
      {dropZones.map((zone, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: zone.left,
            top: zone.top,
            width: zone.width,
            height: zone.height,
            border: "2px dashed gray",
          }}
        />
      ))}
      <p className="mt-3 ml-1 text-sm ">
        Rəqəmin üzərinə klik et və çıxan rəqəmi sürüklə!
      </p>
    </main>
  );
}

export default App;
