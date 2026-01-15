import logo from '../img/logo_trial.png';
import banner1 from '../img/Banner01.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from "react";
import '../css/login.css';

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

  alert("Login realizado com sucesso!");
  navigate("/logado");
}

    return(
        <div className="container">
            <div className="esquerda">
                <img src={logo} className="icone" alt="" />
                <div className='formulario'>
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
                
                    <div className='descricion'>
                        <div className='lembrar'>
                   <input
                        type="checkbox"
                        checked={lembrar}
                        onChange={(e) => setLembrar(e.target.checked)}
                    />
                            <label htmlFor="lembrar">Lembrar-me</label>
                        </div>
                        <div className='esqueciSenha'>
                            <Link to="/esqueceuSenha">Esqueci a Senha</Link>
                        </div>
                    </div>

                    <button type="submit" className='logar'>Entrar</button>
                    </form>

                    <hr></hr>

                    <p className='contaNova'>Criar uma Conta</p>

                    <div className='iconesSocial'>
                        <a href="https://www.google.com/" target="_blank" className="custom-button" rel="noopener noreferrer" aria-label="Google">
                        <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="" aria-hidden="true" style={{width: '20px', height: '20px'}} onerror="this.style.display='none'" />Google</a>
                        <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" className="custom-button" rel="noopener noreferrer" aria-label="Facebook">
                        <img src="https://cdn-icons-png.flaticon.com/128/1384/1384053.png" alt="" aria-hidden="true" style={{width: '20px', height: '20px'}} onerror="this.style.display='none'" />Facebook</a>
                    </div>
                </div>
            </div>
            <div className="direta">
                <img src={banner1} className="banner" alt="" />

                <h3>Seja Bem vindo ao nossa loja LS Aromatizante</h3>
            </div>
        </div>
    )
}

export default Login;