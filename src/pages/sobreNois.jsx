import style from "../css/sobreNois.module.css"
import IconeCartao from "../img/PAGAMENTO.svg";
import IconeCaixa from "../img/ENTREGA.svg";
import IconeSuport from "../img/SUPORTE.svg";
import IconePromocao from "../img/PROMOCAO.svg";

function SobreNois(){
    return(
      <div className={style.notficar}>
          <div className={style.card}>
            <img src={IconeCartao} alt="" />

            <div className={style.descriptCard}>
              <p>Forma de Pagamento</p>

              <p>Temos forma de pagamento como pix, cartao ou dinheiro</p>
            </div>
          </div> 

          <div className={style.card}>
            <img src={IconeCaixa} alt="" />

            <div className={style.descriptCard}>
              <p>Entregas</p>

              <p>Entrega dos nossos produtos sao seguros e embalado para o nosso cliente</p>
            </div>
          </div> 

          <div className={style.card}>
            <img src={IconeSuport} alt="" />

            <div className={style.descriptCard}>
              <p>Suporte</p>

              <p>Suporte ligado por 24 horas para responder<br />  qualquer duvida do cliente</p>
            </div>
          </div> 

          <div className={style.card}>
            <img src={IconePromocao} alt="" />

            <div className={style.descriptCard}>
              <p>Promoções</p>

              <p>Temos kits, promoções e tambem temos combos</p>
            </div>
          </div> 
        </div>
    )
}

export default SobreNois;