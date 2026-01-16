import Logo from "../img/logo_trial.png";
import { useNavigate } from "react-router-dom";
import "../css/esqueci-senha.css";
import { useState } from "react";

function EsqueceuSenha() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  async function entrar(e) {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Preencha o email");
      return;
    }

    alert("Instruções para recuperação de senha foram enviadas para o seu email.");
    navigate("/");
  }

  return (
    <div className="container">
      <div className="esquerda">
        <img src={Logo} className="icone" alt="Logo" />

        <div className="descricion2">
          <p>Insira seu email para receber as instruções de recuperação de senha.</p>
        </div>

        <div className="formulario">
          <form noValidate onSubmit={entrar}>
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit">Recuperar Senha</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EsqueceuSenha;