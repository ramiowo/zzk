import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Test from "./pages/test/Test";
import MbtiResult from "./pages/test/MbtiResult";
import Header from "./components/Header";
import Info from "./pages/info/Info";

const Router = () => {
  const location = useLocation();
  const hiddenHeader = ["/"];
  const showHeader = !hiddenHeader.includes(location.pathname);
  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/mbtiresult" element={<MbtiResult />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </>
  );
};

export default Router;
