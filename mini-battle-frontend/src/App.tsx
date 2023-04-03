// LIBS
import { Route, Routes } from "react-router";

// COMPONENTS
import { Home } from "./pages/Home";
import { Realm1 } from "./pages/Realm1";
import { Realm2 } from "./pages/Realm2";
import { Realm3 } from "./pages/Realm3";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vikings-realm" element={<Realm1 />} />
        <Route path="/knights-realm" element={<Realm2 />} />
        <Route path="/samurais-realm" element={<Realm3 />} />
      </Routes>
    </>
  );
}

export default App;
