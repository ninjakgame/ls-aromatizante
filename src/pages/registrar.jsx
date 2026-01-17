import style from '../css/registrar.module.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../img/logo_trial.png";

function Registrar() {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cep, setCep] = useState("");
    
    function entrar(e) {
  e.preventDefault();
    if (usuario === "" || email === "" || senha === "" || confirmarSenha === ""|| telefone === "" || cep === "") {
    alert("Preencha todos os campos!");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  alert("Login realizado com sucesso!");
  navigate("/login");
}

    return(
        <div className={style.container}>
            <div className={style.direitaContainer}>

                <div className={style.direta}>
                    <img className={style.logo2} src={Logo} alt="" />

                    <form className={style.formulario} onSubmit={entrar}>
                    <input name='usuario' id='usuario' required placeholder='Usuario' onChange={(e) => setUsuario(e.target.value)}/>
                    
                    <input  name='email' id='email' required placeholder='Email@gmail.com' onChange={(e) => setEmail(e.target.value)}/>

                    <div className={style.senhas}>
                        <input type="password" name='senha' id='senha' required placeholder='Senha' onChange={(e) => setSenha(e.target.value)}/>

                        <input type="password" name='confirmarSenha' id='confirmarSenha' required placeholder='Confirmar Senha' onChange={(e) => setConfirmarSenha(e.target.value)}/>
                    </div>
                    <input name='telefone' id='telefone' required placeholder='Telefone' onChange={(e) => setTelefone(e.target.value)}/>
                    
                    <input name='cep' id='cep' required placeholder='CEP' onChange={(e) => setCep(e.target.value)}/>
                    <button type='submit'>Registrar-se</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registrar;