import { Route, Routes } from "react-router-dom";
import Counter from "./components/counter";
import Stopwatch from "./components/stopwatch";
import Filter from "./components/filter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/filter" element={<Filter/>} />
      </Routes>
    </div>
  );
}

export default App;
