import logo from '../img/logo_trial.png';
import banner1 from '../img/Banner01.png';
import { Link, useNavigate } from 'react-router-dom';
import style from '../css/login.module.css';
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [lembrar, setLembrar] = useState(false);

  function entrar(e) {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha email e senha!");
      return;
    }

    if (!lembrar) {
      alert("Você precisa marcar o checkbox para continuar.");
      return;
    }

    // ✅ login fake (front-end apenas)
    navigate("/paginaPrincipal");
  }

  return (
    <div className={style.container}>
      <div className={style.esquerda}>
        <img src={logo} className={style.icone} alt="Logo" />

        <div className={style.formulario}>
          <form onSubmit={entrar}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Senha</label>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />

            <div className={style.descricion}>
              <div className={style.lembrar}>
                <input
                  id="lembrar"
                  type="checkbox"
                  checked={lembrar}
                  onChange={(e) => setLembrar(e.target.checked)}
                />
                <label htmlFor='lembrar'>Lembrar-me</label>
              </div>

              <div className={style.esqueciSenha}>
                <Link to="/esqueci-senha">Esqueci a Senha</Link>
              </div>
            </div>

            <button type="submit" className={style.logar}>
              Entrar
            </button>

            <button
              type="button"
              className={style.registro}
              onClick={() => navigate("/registrar")}
            >
              Registrar-se
            </button>
          </form>

          <hr />
          <p className={style.contaNova}>OU</p>

          <div className={style.iconesSocial}>
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={style.custombutton}
            >
              Google
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={style.custombutton}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className={style.direita}>
        <img src={banner1} className={style.banner} alt="Banner" />
        <h3>
          Seja bem-vindo à nossa loja <span>LS Aromatizante</span>
        </h3>
      </div>
    </div>
  );
}

export default Login;
