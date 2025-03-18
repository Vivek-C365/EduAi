import { useState } from "react";
import { format, addDays } from "date-fns";
import BigCalendarComponent from "./BigCalendarComponent";

const Calendar = () => {
  const today = new Date();
  const [startDate, setStartDate] = useState(today);
  const [activeDay, setActiveDay] = useState(format(today, "yyyy-MM-dd"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState({});
  const [newTask, setNewTask] = useState("");

  function generateTasks() {
    const taskOptions = [
      "Research",
      "Group Study",
      "Wireframe",
      "Meeting",
      "Review",
    ];
    return taskOptions
      .sort(() => 0.5 - Math.random())
      // .slice(0, Math.floor(Math.random() * 3) + 1);
  }

  const days = Array.from({ length: 4 }, (_, i) => {
    const date = addDays(startDate, i);
    const fullDate = format(date, "yyyy-MM-dd");

    return {
      day: format(date, "d"),
      name: format(date, "EEE"),
      fullDate,
      tasks: events[fullDate] || generateTasks(),
    };
  });

  const handleDateClick = (fullDate, tasks) => {
    setActiveDay(fullDate);
    setIsModalOpen(true);
    setEvents((prevEvents) => ({ ...prevEvents, [fullDate]: tasks }));
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    setEvents((prevEvents) => {
      const updatedTasks = [...(prevEvents[activeDay] || []), newTask];
      return { ...prevEvents, [activeDay]: updatedTasks };
    });

    setNewTask("");
  };

  return (
    <div className="rounded-2xl w-full max-w-2xl">
      <div className="flex gap-4 p-1.5 items-center justify-around overflow-auto working-dates">
        {days.map(({ day, name, fullDate, tasks }) => (
          <div className="flex flex-col items-center h-36 justify-between gap-2" >
            <div className="  overflow-y-auto flex flex-col items-center max-h-[2.7rem] scrollbar-hidden">
              {tasks.map((task, index) => (
                <span
                  key={index}
                  className={`inline-block px-3 py-1 rounded-full text-xs mt-1 ${
                    task === "Research"
                      ? "bg-blue-100 text-blue-700"
                      : task === "Wireframe"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {task}
                </span>
              ))}
            </div>

            <div
              key={fullDate}
              className={`p-[1rem] h-[5.5rem] rounded-[4rem] max-w-max text-center cursor-pointer transition-all bg-[#8080800a]  transform hover:scale-102 hover:bg-purple-100 ${
                activeDay === fullDate
                  ? "bg-green-100 border-green-500"
                  : "border-transparent"
              }`}
              onClick={() => handleDateClick(fullDate, tasks)}
            >
              <div className="text-lg font-bold text-gray-800 mb-2">{day}</div>
              <div className="text-sm text-gray-600 mb-3">{name}</div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-11/12 max-w-4xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Selected Date: {format(new Date(activeDay), "PPPP")}
              </h2>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mb-4 flex gap-2">
              <input
                type="text"
                className="border text-gray-800 border-gray-300 rounded-lg p-2 w-full"
                placeholder="Add a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={handleAddTask}
              >
                Add
              </button>
            </div>

            <BigCalendarComponent events={events} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
