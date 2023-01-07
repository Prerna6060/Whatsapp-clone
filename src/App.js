import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app_body">
        <Router>
          <Routes>
            <Route path="/app">
              <Sidebar />
              <Chat />
            </Route>

            <Route path="/">
              <h1>Home Screen</h1>
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
