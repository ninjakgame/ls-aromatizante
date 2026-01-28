import Logo from "../img/logo_trial-removebg-preview.png";
import IconePerfil from "../img/image 22.svg";
import IconeCarinho from "../img/image 23.svg";
import style from "../css/paginaPrincipal.module.css";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import IconeInstagram from "../img/Instagram_icon.pngPix.webp"
import IconeWatsaap from "../img/whattsapPix.png"
import IconeFacebook from "../img/Facebook.svg"


function Logado() {
  
const navigate = useNavigate();

  return (
    <div className={style.container}>

      <div className={style.header}>
        <img src={Logo} className={style.logo} alt="Logo Trial" />

        <nav className={style.navegador}>
         <button
              type="button"
              className={style.navegacao}
              onClick={() => navigate("/login")}
            >
              Pagina Inicial
            </button>
          <button
              type="button"
              className={style.navegacao}
              onClick={() => navigate("/sobreNois")}
            >
              Sobre Nois
            </button>
            <button
              type="button"
              className={style.navegacao}
              onClick={() => navigate("/loja")}
            >
              Loja
            </button>

        </nav>

        <div className={style.icones}>
          <img className={style.iconeNave} src={IconeCarinho} alt="Carrinho" />
          <img className={style.iconeNave} src={IconePerfil} alt="Perfil" />
        </div>
  </div>

        <div className={style.novidade}>
              <p>Novidade da Loja</p>

              <p>Quer receber notificações produtos novos? Entao coloque seu email aqui para recever as nossas promoções</p>
        
              <input className={style.enviarNot} type="text" placeholder="usuario@gmail.com" />

              <button className={style.enviarNotificacao}>Enviar</button>
        </div>

        <footer>
                  <p className={style.footerTag}>LS AROMATIZANTE</p>
            <div className={style.targs}>
              <div className={style.tags}>
                  <Link className={style.nomeTag} to='/login'>PaginaPrincipal</Link>
                  <Link className={style.nomeTag} to='/login'>PaginaPrincipal</Link>
                  <Link className={style.nomeTag} to='/login'>PaginaPrincipal</Link>
                  <Link className={style.nomeTag} to='/login'>PaginaPrincipal</Link>
                  <Link className={style.nomeTag} to='/login'>PaginaPrincipal</Link>
                  <Link className={style.nomeTag} to='/login'>PaginaPrincipal</Link>
              </div>
              <div className={style.nagegador}>
                <div className={style.iconeNavegador}>
                  <img src={IconeInstagram} className={style.tamanhoIcone} alt="" />
                  <img src={IconeWatsaap} className={style.tamanhoIcone} alt="" />
                  <img src={IconeFacebook} className={style.tamanhoIcone} alt="" />
                </div>
                <p className={style.arouba}>@LS AROMATIZANTE</p>
              </div>
            </div>
        </footer>
  </div>
  );
}

export default Logado;
