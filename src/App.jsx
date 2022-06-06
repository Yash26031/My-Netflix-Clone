import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Sign-In" element={<SignIn />} />
        <Route path="Sign-Up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
