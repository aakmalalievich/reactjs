import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Create from "./pages/Create";
import Delete from "./pages/Delete";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Hybrid from "./pages/Hybrid";
import Infinity from "./pages/Infinity";
import LoginRoute from "./pages/Login";
import Sparks from "./pages/Sparks";
import Sport from "./pages/Sport";
import Suv from "./pages/Suv";
import Update from "./pages/Update";
import AuthProvider from "./utilities/authContext";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Suv" element={<Suv />} />
          <Route path="/Sport" element={<Sport />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/Update/:id" element={<Update />} />
          <Route path="/Delete/:id" element={<Delete />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Sparks" element={<Sparks />} />
          <Route path="/Login" element={<LoginRoute />} />
          <Route path="/Hybrid" element={<Hybrid />} />
          <Route path="/Infinity" element={<Infinity />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
