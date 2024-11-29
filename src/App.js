import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./lkAdmin/pages/Main";
import Layout from "./lkAdmin/components/layout/Layout";
import Castomers from "./lkAdmin/pages/Castomers";
import Nutrition from "./lkAdmin/pages/Nutrition";
import "bootstrap/dist/css/bootstrap.css";
import Coaching from "./lkAdmin/pages/Coaching";
import StartPage from "./startPage/StartPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route Component={StartPage} path="/" /> */}
        <Route Component={Layout}>
          <Route path="/main" Component={Main} />
          <Route path="/castomers" Component={Castomers} />
          <Route path="/nutrition" Component={Nutrition} />
          <Route path="/coaching" Component={Coaching} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
