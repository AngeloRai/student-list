import { ImMinus } from "react-icons/im";

const MinusButton = ({ setIsCollapsed }) => {
  return (
    <button
      className="-mt-6 text-2xl text-slate-500 hover:text-black"
      onClick={() => setIsCollapsed(false)}
    >
      <ImMinus />
    </button>
  );
};

export default MinusButton;
