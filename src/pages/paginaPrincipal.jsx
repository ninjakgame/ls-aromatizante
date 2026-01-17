import Logo from "../img/logo_trial-removebg-preview.png";
import IconePerfil from "../img/image 22.svg";
import IconeCarinho from "../img/image 23.svg";
import Banner from "../img/Design sem nomePix.gif";
import style from "../css/paginaPrincipal.module.css";
import IconeProduto1 from "../img/10Pix.jpg"

function Logado() {
  
  return (
    <div className={style.container}>

      <header className={style.header}>
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
            <p>Aromatizante de Casa <br /> Sabor: Lavanda</p>

            <div className={style.botoes}>
              <button className={style.botoesRegistro}>Comprar Agora</button>
              <button className={style.botoesVer}>Ver Mais</button>
            </div>
          </div>

          <div className={style.produtos}>
              <p>Destaque</p>

              <div className={style.tiposProdutos}>
                  <div className={style.imagemProduto}>
                      <img src={IconeProduto1} className={style.ImagemProduct} alt="" />
                  </div>
              </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Logado;
