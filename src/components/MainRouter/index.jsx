import { Route, Routes } from "react-router-dom";
import Home from "../../scenes/Home";
import Login from "../../scenes/Login";
const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<>1231231</>} />
      </Routes>
    </>
  );
};

export default MainRouter;
