import Logo from "../img/logo_trial-removebg-preview.png";
import IconePerfil from "../img/image 22.svg";
import IconeCarinho from "../img/image 23.svg";
import Banner from "../img/Design sem nomePix.gif";
import style from "../css/paginaPrincipal.module.css";

function Logado() {
  return (
    <div className={style.container}>

      <header className={style.header}>
        <img src={Logo} className={style.logo} alt="Logo Trial" />

        <nav className={style.navegador}>
          <p>Página Principal</p>
          <p>Sobre Nós</p>
          <p>Produtos</p>
        </nav>

        <div className={style.icones}>
          <img src={IconeCarinho} alt="Carrinho" />
          <img src={IconePerfil} alt="Perfil" />
        </div>
      </header>

      <main>
        <div className={style.banner}>
          <img
            src={Banner}
            className={style.gifBanner}
            alt="Banner Promocional"
          />

          <div className={style.containerPromotion}>
            <h2 className={style.promotion}>PROMOÇÃO</h2>
            <p>Aromatizante de Casa Sabor: Lavanda</p>

            <div className={style.botoes}>
              <button className={style.botoesRegistro}>Comprar Agora</button>
              <button className={style.botoesVer}>Ver Mais</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Logado;
