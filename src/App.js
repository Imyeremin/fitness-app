import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Main from "./lkAdmin/pages/Main";
import Layout from "./lkAdmin/components/layout/Layout";
import Castomers from "./lkAdmin/pages/Castomers";
import Nutrition from "./lkAdmin/pages/Nutrition";
import Coaching from "./lkAdmin/pages/Coaching";

import MainPage from "./lkCustomer/pages/MainPage";
import LayoutCust from "./lkCustomer/components/layout/LayoutCust";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="/main" Component={Main} />
          <Route path="/castomers" Component={Castomers} />
          <Route path="/nutrition" Component={Nutrition} />
          <Route path="/coaching" Component={Coaching} />
        </Route>
      </Routes>
      <Routes>
        <Route Component={LayoutCust}>
          <Route path="/custmain" Component={MainPage} />
          <Route />
          <Route />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
