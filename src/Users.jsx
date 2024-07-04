function Users({
  userVals,
  onDelete,
  showPoint,
  showPointIndex,
  showPointPlayer,
}) {
  const players = ["Qəşəm", "Ismayıl", "Xudu", "Qədir"];

  return (
    <div className="flex flex-col gap-y-5">
      {players.map((player, index) => (
        <div
          key={index}
          className="flex items-center justify-between mr-2 mt-2"
        >
          <div className="flex font-bold text-gray-800 items-center px-2 pt-[2px] justify-between w-1/2">
            <span className="name">{player}</span>
            <div className="p-2 text-black ml-3 size-10 text-center border border-gray-300 rounded-full bg-white shadow-2xl">
              {userVals[index]}
            </div>
          </div>

          <button
            className="border border-gray-300 p-2 rounded-md text-white bg-red-400"
            onClick={() => onDelete(index)}
          >
            Delete
          </button>

          <div
            className={`size-24 p-1 font-bold transition-opacity ease-in space-x-2 text-white text-lg bg-indigo-400 duration-700  absolute top-1/3 rounded-2xl left-1/2 -translate-x-1/2 z-20 flex items-center justify-center ${
              showPoint && showPointIndex === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <span>{showPointPlayer}</span>
            <span>{userVals[index]}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
