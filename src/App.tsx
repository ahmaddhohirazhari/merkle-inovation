import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Home from "./pages/home";
import UserDetail from "./pages/detailUser";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="update-user/:id" element={<UpdateUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
