import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Register from "./components/Register"
import Login from "./components/Login"
import AddProject from "./components/projects/Add"
import ShowProjects from "./components/projects/Show"

function App() {
  
  console.log(localStorage.getItem('isLogin'));
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-project" element={localStorage.getItem('isLogin') === 'true' ? <AddProject /> : <Navigate to="/login" />}  />
          <Route path="/show-project" element={localStorage.getItem('isLogin') === 'true' ? <ShowProjects /> : <Navigate to="/login" />}  />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
