import Logo from "../img/logo_trial.png";
import { useNavigate } from "react-router-dom";
import style from "../css/esqueciSenha.module.css";
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
    <div className={style.container}>
      <div className={style.esquerda}>
        <img src={Logo} className={style.icone} alt="Logo" />

        <div className={style.descricion2}>
          <p>Insira seu email para receber as instruções de recuperação de senha.</p>
        </div>

        <div className={style.formulario}>
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