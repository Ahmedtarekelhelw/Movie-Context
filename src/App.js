import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./pages/add/Add";
import WatchList from "./pages/watch-list/WatchList";
import Watched from "./pages/watched/Watched";
import { Provider } from "./context/Context";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";

function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="movie-context" element={<WatchList />} />
          <Route path="add" element={<Add />} />
          <Route path="watched" element={<Watched />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
