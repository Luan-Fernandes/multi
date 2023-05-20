import Formulario from "../form/Formulario";
import styles from './Info.module.css'
import { memo } from "react";
function Info({ step, setStep }){
    return(
        <div className={styles.info}>
            <section>
            <h1>Informações Pessoais</h1>
            <p>Forneça seu nome, endereço de e-mail e número de telefone.</p>
            </section>
            <Formulario step={step} setStep={setStep}/>
            

        </div>
    );
}

export default Info;
export const InfoMemo = memo(Info);