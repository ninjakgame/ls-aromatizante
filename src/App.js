import { BrowserRouter, Routes, Route } from "react-router-dom";

// Páginas
import Login from "./pages/login";
import Registrar from "./pages/registrar";
import EsqueceuSenha from "./pages/esqueci-senha";
import Logado from "./pages/logado";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página inicial / login */}
        <Route path="/" element={<Login />} />

        {/* Registrar */}
        <Route path="/registrar" element={<Registrar />} />

        {/* Esqueci a senha */}
        <Route path="/esqueci-senha" element={<EsqueceuSenha />} />

        {/* Página após login */}
        <Route path="/logado" element={<Logado />} />

        <Route path="/login" element={<Login />} />

        {/* Rota inexistente */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
