import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProtectedRoutes from "./components/ProtectedRoute";
import { AuthContextProvider } from "./context/authContext";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import SearchResult from "./pages/SearchResult";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <AuthContextProvider>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/gallery"
            element={
              <ProtectedRoutes>
                <Gallery />
              </ProtectedRoutes>
            }
          />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route
            path="/search/nature"
            element={<SearchResult specificQuery="nature" />}
          />
        </Routes>
      </DndProvider>
    </AuthContextProvider>
  );
}

export default App;
