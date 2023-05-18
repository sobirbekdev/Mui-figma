import { Route, Routes } from "react-router-dom";
import { Page } from "./Page/Pages";


function App() {

  return (
    <div>
    <Routes>
      <Route path="/" element={<Page />}/>
    </Routes>
    </div>
  );
}

export default App;
