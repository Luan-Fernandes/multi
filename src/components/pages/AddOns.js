import styles from './AddOns.module.css'
import { useNavigate } from 'react-router-dom';
function AddOns({ setStep, planOn, setPlanOn, planLager, setPlanLager,planCust, setPlanCust, mesAno, setValorOn, setValorLager, setValorCust}) {
    
    const history = useNavigate();

    const hendleClickOnline = (e) => {
        e.preventDefault()
        setPlanOn(!planOn);
    }
    const hendleClickLager = (e) => {
        e.preventDefault()
        setPlanLager(!planLager);
    }
    const hendleClickCust = (e) => {
        e.preventDefault()
        setPlanCust(!planCust);
    }

    /*valor do plano Online*/
    if(planOn === true && mesAno === false){
        setValorOn(1);
    }else if(planOn === true && mesAno === true){
        setValorOn(10);
    }else{
        setValorOn(0);
    }

    /*valor do plano Armazenamento*/
    if(planLager === true && mesAno === false){
        setValorLager(2);
    }else if(planLager === true && mesAno === true){
        setValorLager(20);
    }else{
        setValorLager(0);
    }

    /*valor do plano Personalizado*/

    if(planCust === true && mesAno === false){
        setValorCust(2);
    }else if(planCust === true && mesAno === true){
        setValorCust(20);
    }else{
        setValorCust(0);
    }

    const hendleClickNextStep = () => {
        setStep(4);
        history("/summary");
    }
    const hendleClickGoBack = () => {
        setStep(2);
        history("/selectplan");
    }
    return (
        <div className={styles.add}>
            <h1 className={styles.h1}>Escolha complementos</h1>
            <p className={styles.p}>Os complementos ajudam a melhorar sua experiência de jogo.</p>

            <form>
                <label onClick={hendleClickOnline} className={styles.labelstyled} >
                    <div className={planOn === true ? styles.activeInput : styles.input}></div>
                    <section className={styles.options}>
                        <p className={styles.opTitle}>Atendimento Online.</p>
                        <p className={styles.oppar}>Acesso a jogos multijogador.</p>
                    </section>
                    <span className={styles.valorOn}>{mesAno === false ? "+$1/Mês" : "+$10/Ano" }</span>
                </label>

                <label onClick={hendleClickLager} className={styles.labelstyled}>
                    <div className={planLager === true ? styles.activeInput : styles.input}></div>
                    <section className={styles.options}>
                        <p className={styles.opTitle}>Maior armazenamento.</p>
                        <p className={styles.oppar}>1 TB extra de economia na nuvem.</p>
                    </section>
                    <span className={styles.valorLager}>{mesAno === false ? "+$2/Mês" : "+$20/Ano" }</span>
                </label>

                <label onClick={hendleClickCust} className={styles.labelstyled}>
                    <div className={planCust === true ? styles.activeInput : styles.input}></div>
                    <section className={styles.options}>
                        <p className={styles.opTitle}>Perfil personalizável.</p>
                        <p className={styles.oppar}>Tema personalizado no seu perfil.</p>
                    </section>
                    <span className={styles.valorCust}>{mesAno === false ? "+$2/Mês" : "+$20/Ano" }</span>
                </label>

                <div className={styles.bts}>
                    <button onClick={hendleClickGoBack} className={styles.goBack}>Go Back</button>
                    <button onClick={hendleClickNextStep} className={styles.nextStep}>Next Step</button>
                </div>
            </form>
        </div>
    );
}

export default AddOns;