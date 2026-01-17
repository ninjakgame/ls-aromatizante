import logo from '../img/logo_trial.png';
import banner1 from '../img/Banner01.png';
import { Link } from 'react-router-dom';
import style from '../css/login.module.css';
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Login(){

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [lembrar, setLembrar] = useState(false);

    function entrar(e) {
  e.preventDefault();

  if (email === "" || senha === "") {
    alert("Preencha email e senha!");
    return;
  }

  if (!lembrar) {
    alert("Você precisa marcar o checkbox para continuar.");
    return;
  }

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email,
      senha
    })
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Login inválido");
      }
      return res.json();
    })
    .then(data => {
      alert(data.mensagem);
      navigate("/paginaPrincipal");
    })
    .catch(err => {
      alert("Email ou senha incorretos");
    });
}


    return(
        <div className={style.container}>
            <div className={style.esquerda}>
                <img src={logo} className={style.icone} alt="" />
                <div className={style.formulario}>
                    <form onSubmit={entrar}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="senha">Senha</label>
                    <input type="password" 
                        placeholder='Senha' 
                        id='senha' 
                        name='senha'
                        onChange={(e) => setSenha(e.target.value)}
                    />
                
                    <div className={style.descricion}>
                        <div className={style.lembrar}>
                   <input
                        type="checkbox"
                        checked={lembrar}
                        onChange={(e) => setLembrar(e.target.checked)}
                        id="lembrar"
                        name='lembrar'
                    />
                            <label htmlFor="lembrar">Lembrar-me</label>
                        </div>
                        <div className={style.esqueciSenha}>
                            <Link to="/esqueci-senha">Esqueci a Senha</Link>
                        </div>
                    </div>

                    <button type="submit" className={style.logar}>Entrar</button>
                    <button className={style.registro} type="button" onClick={(e) => { e.preventDefault(); navigate("/registrar"); }}> Registrar-se </button>

                    </form>

                    <hr></hr>

                    <p className={style.contaNova}>OU</p>

                    <div className={style.iconesSocial}>
                        <a href="https://www.google.com/" target="_blank" className={style.custombutton} rel="noopener noreferrer" aria-label="Google">
                        <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" aria-hidden="true" style={{width: '20px', height: '20px'}} onerror="this.style.display='none'" />Google</a>
                        <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" className={style.custombutton} rel="noopener noreferrer" aria-label="Facebook">
                        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384053.png" alt="" aria-hidden="true" style={{width: '20px', height: '20px'}} onerror="this.style.display='none'" />Facebook</a>
                    </div>
                </div>
            </div>
            <div className="direta">
                <img src={banner1} className={style.banner} alt="" />

                <h3>Seja Bem vindo a nossa loja <span>LS Aromatizante</span></h3>
            </div>

            
        </div>
    )
}

export default Login;