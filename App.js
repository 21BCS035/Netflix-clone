import React from "react";
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import { AuthContextPreovider } from "./context/AuthContext";
import Signup from './pages/Signup'
import Login from './pages/Login'
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
    <AuthContextPreovider>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element = {<Login/>}/>
      <Route path='/signup' element = {<Signup/>}/>
      <Route path="/account" element={
        <ProtectedRoute>
      <Account/>
      </ProtectedRoute>
      } />
     </Routes>
    </AuthContextPreovider>
     
    </>
  );
}

export default App;
