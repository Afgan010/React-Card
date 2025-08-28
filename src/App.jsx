import { Route, Routes } from "react-router-dom";
import data from "./assets/db/data";

import Cards from "./Components/Cards";
import Carddetails from "./Components/Carddetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cards data={data} />} />
        <Route path="/details/:id" element={<Carddetails />} />
      </Routes>
    </>
  );
};

export default App;
