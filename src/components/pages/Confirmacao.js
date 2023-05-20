import confirm from '../../assets/images/icon-thank-you.svg';
import styles from './Confirmacao.module.css';

const Confirmacao = () => {
  return (
    <div className={styles.confirm} >
        <img src={confirm} alt="Obrigado" />
        <h1 className={styles.h1}>Obrigado!</h1>
        <p className={styles.p}>Obrigado por confirmar sua inscrição! Esperamos que você se divirta usando nossa plataforma. se você precisar de suporte, sinta-se à vontade para nos enviar um e-mail em support@loremgaming.com.</p>
    </div>
  )
}

export default Confirmacao