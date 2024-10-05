import { useEffect, useState } from "react";
import { FaPlus, FaMinus, FaEye, FaEyeSlash, FaRedo } from "react-icons/fa";

function App() {
  let countValue = JSON.parse(localStorage.getItem("count")) || 0;
  let maxCountValue = JSON.parse(localStorage.getItem("maxCount")) || 0;

  let [counter, setCounter] = useState(countValue);
  let [maxCount, setMaxCount] = useState(maxCountValue);
  let [show, setShow] = useState(true);
  let [h1BgChanged, setH1BgChanged] = useState(false);

  // Update localStorage and maxCount
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(counter));
    if (counter > maxCount) {
      setMaxCount(counter);
      localStorage.setItem("maxCount", JSON.stringify(counter));
    }
  }, [counter, maxCount]);

  // Increment counter
  function Addcounts() {
    setCounter(counter + 1);
  }

  // Decrement counter
  function removeCounts() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  // Reset counter to 0
  function resetCounter() {
    setCounter(0);
  }

  // Toggle background gradient of the counter display
  function toggleH1Bg() {
    setH1BgChanged((prevState) => !prevState);
  }

  // Show/Hide Toggle
  function toggleShow() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      <div className="text-center p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-md transition-all duration-500">
        {show && (
          <div className="counter bg-black bg-opacity-30 p-10 rounded-3xl shadow-lg transition-all">
            <h1
              className={`text-5xl font-extrabold p-6 text-center mb-4 text-transparent bg-clip-text ${
                h1BgChanged
                  ? "bg-gradient-to-r from-purple-500 to-pink-500"
                  : "bg-gradient-to-r from-green-400 to-teal-400"
              }`}
              onClick={toggleH1Bg}
            >
              {counter}
            </h1>
            <h3 className="text-sm text-gray-400">
              Max Count Reached: <span className="text-white">{maxCount}</span>
            </h3>
            <div className="flex justify-center space-x-5 mt-6">
              <button
                className="p-4 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-500 transform hover:scale-110 transition duration-300"
                onClick={Addcounts}
                title="Add Count"
              >
                <FaPlus />
              </button>
              <button
                className="p-4 rounded-full bg-red-600 text-white shadow-lg hover:bg-red-500 transform hover:scale-110 transition duration-300"
                onClick={removeCounts}
                title="Remove Count"
              >
                <FaMinus />
              </button>
              <button
                className="p-4 rounded-full bg-yellow-500 text-white shadow-lg hover:bg-yellow-400 transform hover:scale-110 transition duration-300"
                onClick={resetCounter}
                title="Reset Counter"
              >
                <FaRedo />
              </button>
            </div>
          </div>
        )}

        <div className="mt-10 flex justify-evenly">
          <button
            className="p-3 rounded-full bg-indigo-500 text-white shadow-md hover:bg-indigo-400 transform hover:scale-105 transition duration-300"
            onClick={toggleShow}
            title={show ? "Hide Counter" : "Show Counter"}
          >
            {show ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App; 