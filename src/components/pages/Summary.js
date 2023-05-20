
import { useNavigate } from 'react-router-dom';
import styles from './Summary.module.css'

function Summary({ selected, mesAno, porMesAno, setPorMesAno, valorPlan, valorOn, valorLager, valorCust, planOn, planLager, planCust, valorTotal, setValorTotal, setStep }) {
    const history = useNavigate();
    if (mesAno === false) {
        setPorMesAno("Mês");
    } else {
        setPorMesAno("Ano");
    }

    setValorTotal(valorPlan + valorOn + valorLager + valorCust);

    const hendleGoBack = (e) => {
        e.preventDefault()
        history("/addons")
        setStep(3)
    }
    return (
        <div className={styles.sum}>
            <h1 className={styles.h1}>Finalização</h1>
            <p className={styles.p}>Verifique se tudo parece OK antes de confirmar.</p>

            <section className={styles.dadosPai}>
                <div className={styles.Plan}>
                    <div>
                        <h1>{selected} ({porMesAno})</h1>
                        <span onClick={() => history("/SelectPlan")}>Mudar Plano</span>
                    </div>
                    <span className={styles.valorDoPlano}>${valorPlan}/{porMesAno}</span>
                </div>
                <div className={styles.container}></div>
                <div>
                    {planOn && <div className={styles.planSelect}>
                        <h1>Atendimento Online.</h1>
                        <span className={styles.valorOn}>+${valorOn}/{porMesAno}</span>
                    </div>}

                    {planLager && <div className={styles.planSelect}>
                        <h1>Maior armazenamento.</h1>
                        <span className={styles.valorLager}>+${valorLager}/{porMesAno}</span>
                    </div>}

                    {planCust && <div className={styles.planSelect}>
                        <h1>Perfil personalizável.</h1>
                        <span className={styles.valorCust}>+${valorCust}/{porMesAno}</span>
                    </div>}
                </div>

                <div className={styles.valorTotal}>
                    <p>Total a pagar (por {porMesAno})</p>
                    <span>+${valorTotal}/{porMesAno}</span>
                </div>
            </section>
            <div className={styles.bts}>
                    <button className={styles.goBack} onClick={hendleGoBack}>Go Back</button>
                    <button onClick={() => history("/confirm")} className={styles.nextStep}>Next Step</button>
                </div>
        </div>
    );
}

export default Summary;