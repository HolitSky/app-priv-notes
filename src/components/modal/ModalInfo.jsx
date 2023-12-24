const ModalInfo = ({ type, onClick, title, body, date }) => {
  return (
    <div
      className="h-[100vh] w-full fixed top-0 bottom-0  bg-black bg-opacity-[0.60] z-10 flex items-center justify-center"
      onClick={onClick}
    >
      <div className="w-10/12 bg-white p-8 border border-blue-500 rounded-lg">
        <div className="flex flex-col gap-1">
          <h1 className="bg-slate-400 font-rubik-doodle text-3xl p-2 mb-2">{type}</h1>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-slate-500">{date}</p>
        </div>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ModalInfo;
