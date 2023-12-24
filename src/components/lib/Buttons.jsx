const ButtonPrimary = ({ title = "click", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-1/2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      {title}
    </button>
  );
};

const ButtonDanger = ({ title = "click", onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      {title}
    </button>
  );
};

const ButtonDynamic = ({ title = "click", onClick, color }) => {
  return (
    <button onClick={onClick} className={`${color}`}>
      {title}
    </button>
  );
};

export { ButtonPrimary, ButtonDanger, ButtonDynamic };
