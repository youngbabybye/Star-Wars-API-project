import {Route, Routes} from "react-router-dom";


import { Homepage } from "./Pages/Homepage";
import { Layout } from "./Components/Layout";
import { People } from "./Pages/People";
import { Planets } from "./Pages/Planets";
import { Starships } from "./Pages/Starships";
import { Vehicles } from "./Pages/Vehicles";
import { Films } from "./Pages/Films";
import { Species } from "./Pages/Species";
import { NotFoundPage } from "./Pages/NotFoundPage";
import { DynamicPage } from "./Pages/DynamicPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="people" element={<People />} />
          <Route path="planets" element={<Planets />} />
          <Route path="starships" element={<Starships />} />
          <Route path="vehicles" element={<Vehicles />} />
          <Route path="films" element={<Films />} />
          <Route path="species" element={<Species />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="people/:id" element={<DynamicPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
