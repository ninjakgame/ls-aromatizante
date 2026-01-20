import Logo from "../img/logo_trial-removebg-preview.png";
import IconePerfil from "../img/image 22.svg";
import IconeCarinho from "../img/image 23.svg";
import style from "../css/paginaPrincipal.module.css";
import IconeCartao from "../img/PAGAMENTO.svg"

function Logado() {
  
  return (
    <div className={style.container}>

      <div className={style.header}>
        <img src={Logo} className={style.logo} alt="Logo Trial" />

        <nav className={style.navegador}>
          <button className="navegacao">Pagina Principal</button>
          <button className="navegacao">Sobre Nois</button>
          <button className="navegacao">Produtos</button>
        </nav>

        <div className={style.icones}>
          <img src={IconeCarinho} alt="Carrinho" />
          <img src={IconePerfil} alt="Perfil" />
        </div>
  </div>

  <div>
          <img src={IconeCartao} alt="" />
        </div>
  </div>
  );
}

export default Logado;
