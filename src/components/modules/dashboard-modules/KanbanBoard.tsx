"use client";
import { useState } from "react";
import { SlOptions } from "react-icons/sl";
import { Avatar } from "../..";

type Card = {
  id: number;
  title: string;
  description: string;
  priority: string;
  createdAt: string;
  timeline: string;
  dueDate: string;
  createdBy: string;
  assignedTo: string;
  column: string;
};

type Column = {
  id: string;
  title: string;
};

const initialColumns: Column[] = [
  { id: "todo", title: "To Do" },
  { id: "inProgress", title: "In Progress" },
  { id: "done", title: "Done" },
  { id: "revised", title: "Revised" },
];

const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [cards, setCards] = useState<Card[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newCard, setNewCard] = useState<Card>({
    id: 0,
    title: "",
    description: "",
    priority: "",
    createdAt: "",
    timeline: "",
    dueDate: "",
    createdBy: "",
    assignedTo: "",
    column: "todo",
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const addCard = () => {
    const updatedCards = [...cards, { ...newCard, id: Date.now() }];
    setCards(updatedCards);
    closeModal();
  };

  const moveCard = (cardId: number, targetColumn: string) => {
    if (
      columns.find((column) => column.id === targetColumn)?.title === "To Do"
    ) {
      // Restrict moving cards back to "To Do" column
      return;
    }

    const updatedCards = cards.map((card) =>
      card.id === cardId ? { ...card, column: targetColumn } : card
    );
    setCards(updatedCards);
  };

  const deleteCard = (cardId: number) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    setCards(updatedCards);
  };

  return (
    <div className="m-2">
      <h1 className="text-2xl font-bold mb-4">Kanban Board</h1>
      <div className="flex">
        {columns.map((column) => (
          <div key={column.id} className="flex-1 m-0 mx-2">
            <h2 className="text-lg font-semibold mb-2">{column.title}</h2>
            <div
              className="border border-white/10 p-2 md:p-4 min-h-[100px] bg-transparent rounded-2xl relative"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                const cardId = parseInt(e.dataTransfer.getData("cardId"));
                moveCard(cardId, column.id);
              }}
            >
              {cards
                .filter((card) => card.column === column.id)
                .map((card) => (
                  <div
                    key={card.id}
                    className="bg-app-primary border border-[#292291] p-5 mb-2 cursor-pointer relative rounded-xl"
                    draggable
                    onDragStart={(e) => {
                      e.dataTransfer.setData("cardId", card.id.toString());
                    }}
                  >
                    <div className="flex flex-col w-full gap-2">
                      {/* row-1 priority and option settings */}
                      <div
                        className={`flex items-center justify-between w-full `}
                      >
                        <div className={`flex items-center gap-2`}>
                          <div
                            className={`w-[8px] h-[8px] rounded-full bg-app-accent-2`}
                          />
                          <p className={`text-app-accent-2 text-sm`}>
                            {card?.priority}
                          </p>
                        </div>
                        <div className={`relative group animationEaseInOut`}>
                          <SlOptions
                            size={22}
                            className={`text-white/80 group-hover:text-app-accent-2 animationEaseInOut`}
                          />
                          {column.id === "todo" && (
                            <button
                              className="text-rose-700 absolute top-[20px] right-0 py-1 px-3 cursor-pointer hidden group-hover:block animationEaseInOut bg-rose-300 rounded-lg "
                              onClick={() => deleteCard(card.id)}
                            >
                              X
                            </button>
                          )}
                        </div>
                      </div>
                      {/* row-2 Title */}
                      <div>
                        <h2
                          className={`text-2xl font-bold capitalize text-white`}
                        >
                          {card.title}
                        </h2>
                      </div>
                      {/* row-3 description */}
                      <div>
                        <p className={`text-sm text-white/70 font-light`}>
                          {card?.description}
                        </p>
                      </div>
                      {/* row-4 Assigned user and days left ->> due in 3 days
                       */}
                      <div className="flex w-full items-center justify-between mt-5">
                        <div className="flex">
                          <Avatar borderSize="border-[2px]" collapsed />
                          <Avatar borderSize="border-[2px]" collapsed />
                          <Avatar borderSize="border-[2px]" collapsed />
                        </div>
                        {/* Dues in */}
                        <div className="text-xs text-white/80 ">
                          {card?.dueDate}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {column.id === "todo" &&
                cards.filter((card) => card.column === column.id).length ===
                  0 && (
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-gray-500 text-sm">
                      All tasks completed. Add a card to create a new one.
                    </p>
                  </div>
                )}
              {column.id === "todo" && (
                <button
                  className="bg-app-primary w-full text-white/80 px-2 py-1 rounded-xl"
                  onClick={openModal}
                >
                  Add Card
                </button>
              )}
              {column.id !== "todo" &&
                cards.filter((card) => card.column === column.id).length ===
                  0 && (
                  <div className="text-center text-gray-500 text-sm py-2 bg-app-dark-2 rounded-xl border border-dashed border-white/20 select-none">
                    Drag Card Here
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding a new card */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-app-dark-2 p-10 rounded-3xl shadow-lg modal w-[80%] md:w-[50%]  ml-0 lg:ml-[17%]">
            <h2 className="text-lg font-semibold mb-4">Add New Card</h2>
            <div className="mb-4">
              {/* <label>Title:</label> */}
              <input
                type="text"
                value={newCard.title}
                placeholder="Enter the title of the card!"
                className={`bg-transparent outline-none border border-white/10 p-2 rounded-xl w-full focus:ring`}
                onChange={(e) =>
                  setNewCard({ ...newCard, title: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              {/* <label>Title:</label> */}
              <input
                type="text"
                value={newCard.priority}
                placeholder="Enter the priority message!"
                className={`bg-transparent outline-none border border-white/10 p-2 rounded-xl w-full focus:ring`}
                onChange={(e) =>
                  setNewCard({ ...newCard, priority: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              {/* <label>Title:</label> */}
              <input
                type="date"
                value={newCard.dueDate}
                className={`bg-transparent outline-none border border-white/10 p-2 rounded-xl w-full focus:ring`}
                onChange={(e) =>
                  setNewCard({ ...newCard, dueDate: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              {/* <label>Description:</label> */}
              <textarea
                value={newCard.description}
                rows={4}
                placeholder="Enter the description about task!"
                onChange={(e) =>
                  setNewCard({ ...newCard, description: e.target.value })
                }
                className={`bg-transparent outline-none border border-white/10 p-2 rounded-xl w-full focus:ring`}
              />
            </div>
            {/* Add other input fields... */}
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded"
              onClick={addCard}
            >
              Add Card
            </button>
            <button
              className="bg-gray-300 text-gray-800 px-2 py-1 rounded ml-2"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KanbanBoard;
