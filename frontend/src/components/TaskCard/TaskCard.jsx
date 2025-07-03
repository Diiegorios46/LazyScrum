const TaskCard = ({ text }) => (
  <div className="bg-transparent border-none text-white flex justify-between items-center px-2">
    <p>{text}</p>
    <span className="text-xl">☰</span>
  </div>
);

export default TaskCard;