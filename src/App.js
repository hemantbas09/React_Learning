import "./App.css";
import CustomeHook from "./CustomeHook";
import Button from "./Button";
import Chekcout from "./Chekcout";
import Context from "./Context";
import Home from "./Home";
import Memo from "./Memo";
import Reducer from "./Reducer";
import UseCallback from "./UseCallback";
import Useeffect from "./Useeffect";
import Usestate from "./Usestate";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
function App() {
  let token = false;

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/custom-hook" element={<CustomeHook />} />
          <Route
            path="/button"
            element={token ? <Button /> : <Navigate to="/" replace />}
          />
          <Route path="/checkout" element={<Chekcout />} />
          <Route path="/context" element={<Context />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/reducer" element={<Reducer />} />
          <Route path="/use-callback" element={<UseCallback />} />
          <Route path="/use-effect" element={<Useeffect />} />
          <Route path="/use-state" element={<Usestate />} />
          <Route path="*" element={<h1>Page is Not Found!!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
