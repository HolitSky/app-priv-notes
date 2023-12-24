import { useState } from "react";
import ModalInfo from "../modal/ModalInfo";
import { showFormattedDate } from "../../utils";
import { ButtonDynamic, ButtonDanger } from "../lib/Buttons";

const Card = ({ id, title, body, archived, createdAt, isArchieve, onDelete }) => {
  const date = showFormattedDate(createdAt);
  const [showModal, setShowModal] = useState(false);

  const handleArchieve = () => {
    isArchieve(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <>
      <div
        className="w-72 h-96 bg-white border-2 border-gray-400 cursor-pointer rounded-md p-4 relative z-[5] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <div>
          <p className="text-2xl font-bold mb-2">
            {title.length > 30 ? `${title.substring(0, 30)}...` : `${title}`}
          </p>
          <p className="text-slate-500">{date}</p>
          <p className="text-justify">{body.length > 230 ? `${body.substring(0, 240)}...` : `${body}`}</p>
        </div>
        <div className="flex flex-row gap-1 mt-4">
          <ButtonDynamic
            onClick={handleArchieve}
            title={archived ? "Pindahkan" : "Arsipkan"}
            color={
              archived
                ? "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2"
                : "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            }
          />
          <ButtonDanger onClick={handleDelete} title="Delete" />
        </div>
      </div>
      {showModal && (
        <ModalInfo
          onClick={() => setShowModal(false)}
          title={title}
          body={body}
          date={date}
          type={archived ? "Arsip Catatan" : "Catatan Aktif"}
        />
      )}
    </>
  );
};

export default Card;
