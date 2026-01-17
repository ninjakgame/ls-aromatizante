import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Registrar from "./pages/registrar";
import EsqueceuSenha from "./pages/esqueci-senha";
import Logado from "./pages/paginaPrincipal";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
        <Route path="/esqueci-senha" element={<EsqueceuSenha />} />
        <Route path="/paginaPrincipal" element={<Logado />} />

        <Route path="*" element={<h1>Página não encontrada</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;