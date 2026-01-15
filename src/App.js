import { BrowserRouter, Routes, Route } from "react-router-dom";
import EsqueceuSenha from "./pages/esqueci-senha";
import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/esqueci-senha" element={<EsqueceuSenha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;