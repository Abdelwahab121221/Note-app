import "./App.css";
import Header from "./components/Header.jsx";
import NotePage from "./pages/NotePage.jsx";
import NotesList from "./pages/NotesList.jsx";
import CreateNewNote from "./pages/CreateNewNote.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './all.css'
function App() {
  return (
    <Router>
      <div className="container">
          <Header />
        <Routes>
          <Route path="/" exact Component={NotesList} />
          <Route path="/note/:id" Component={NotePage} />
          <Route path="/add" Component={CreateNewNote} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
