import { ImPlus } from "react-icons/im";

const PlusButton = ({ setIsCollapsed }) => {
  return (
    <button
      className="-mt-6 text-2xl text-slate-500 hover:text-black"
      onClick={() => setIsCollapsed(true)}
    >
      <ImPlus />
    </button>
  );
};

export default PlusButton;
