import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import styles from './Formulario.module.css';

function Formulario({ step, setStep }){

    const history = useNavigate();

    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [phone , setPhone] = useState();
    const [msg, setMsg] = useState();
    const hendleClick = (e) => {
        e.preventDefault()
        if ( name == null || email == null || phone == null) {
            setMsg("Algum Campo em branco");
        }
        
        else{

            history("/selectplan");
            String(phone);
            setStep(2);
        }
    }

    return(
        <div>
                <form className={styles.form}>
                    

                    <label htmlFor="name">Name
                    </label>
                    <input type="text" placeholder="EXP: Luan Fernandes" onChange={(e) => setName(e.target.value)} />
                    

                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input type="text" placeholder="EXP: teste@test.com" onChange={(e) => setEmail(e.target.value)}/>


                    <label htmlFor="Phone">Phone Number</label>
                    <input type="number" placeholder="9.99771-6534" onChange={(e) => setPhone(e.target.value)} maxLength={9}/>

                    <button className={styles.btn} type="button" onClick={hendleClick}>Next Step</button>
                    <span className={msg === undefined ? styles.msgInactiv : styles.msg}>{msg}</span>
                </form>
                
        </div>
    );
}

export default Formulario;