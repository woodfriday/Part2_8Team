import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Edit from "./pages/Edit";
import LinkPost from "./pages/LinkPost";
import UpdatePage from "./pages/UpdatePage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/list" element={<HomePage />} />
        <Route path="/list/:linkid" element={<Edit />} />
        <Route path="/linkpost" element={<LinkPost />} />
        <Route path="/linkpost/:linkid/edit" element={<UpdatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
