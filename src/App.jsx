import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRouter from "./components/MainRouter";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./redux/counter";

function App() {
  // const [count, setCount] = useState(0);
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div style={{ position: "relative", zIndex: 100 }}>
          {/* <div>Count : {count}</div>
          <button onClick={() => setCount(count + 1)}>increase</button>
          <button onClick={() => setCount(count - 1)}>decrease</button> */}
          <div>Count : {count}</div>
          <button onClick={() => dispatch(increment())}>increase</button>
          <button onClick={() => dispatch(decrement())}>decrease</button>
          <button onClick={() => dispatch(incrementByAmount(22))}>
            increase by 22
          </button>
          <button onClick={() => dispatch(reset())}>reset</button>
        </div>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </div>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
