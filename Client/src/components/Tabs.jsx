import { TABS } from "../redux/actions/type";
import { useDispatch } from "react-redux";
import { toggleTab } from "../redux/actions";

const Tabs = ({ currentTab }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center space-x-3 my-4">
      {TABS.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-md text-white transition-all ${
            tab === currentTab
              ? "bg-blue-600 shadow-md"
              : "bg-gray-400 hover:bg-blue-500"
          }`}
          onClick={() => dispatch(toggleTab(tab))}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
