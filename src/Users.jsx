function Users({ userVals, onDelete }) {
  const players = ["Qəşəm", "Ismayıl", "Xudu", "Qədir"];

  return (
    <div className="flex flex-col gap-y-5 ">
      {players.map((player, index) => (
        <div className="flex items-center justify-between mr-2 mt-2">
          <div
            key={index}
            className="flex items-center px-2 pt-[2px] justify-between w-1/2"
          >
            <span>{player}</span>
            <div className="p-2 text-black ml-3 size-10 text-center border border-gray-300 rounded-full">
              {userVals[index]}
            </div>
          </div>

          <button
            className="border border-gray-300 p-2 rounded-md"
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Users;
