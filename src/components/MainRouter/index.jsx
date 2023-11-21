import { Route, Routes } from "react-router-dom";
import Home from "../../scenes/Home";
import Login from "../../scenes/Login";
import Test from "../../scenes/Test";
const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<>1231231</>} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
};

export default MainRouter;
