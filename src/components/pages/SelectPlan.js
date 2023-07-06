import React from 'react';
import arcadeImg from '../../assets/images/icon-arcade.svg';
import advancedImg from '../../assets/images/icon-advanced.svg';
import proImg from '../../assets/images/icon-pro.svg';

import styles from './SelectPlan.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

function SelectPlan({setStep, msgPromocao, setMsgPromocao, selected, setSelected, mesAno, setMesAno, setValorPlan }) {

    const [msg, setMsg] = useState();
    
    const history = useNavigate();
    
    const hendleClick = (e) => {
        e.preventDefault()
        if (selected === undefined) {
            setMsg("Opção não selecionada.");
        }

        else {
            history("/addons");
            setStep(3);
        }
    }
    if(selected === 'Arcade' && mesAno === false){
        setValorPlan(9);
    }else if(selected === 'Arcade' && mesAno === true){
        setValorPlan(90);
    }else if(selected === 'Advanced' && mesAno === false){
        setValorPlan(12);
    }else if(selected === 'Advanced' && mesAno === true){
        setValorPlan(120);
    }else if(selected === 'Pro' && mesAno === false){
        setValorPlan(15);
    }else{
        setValorPlan(150);
    }
    
    const hendleGoBack = (e) => {
        e.preventDefault()
        history("/")
        setStep(1)
    }
    
    const hendleMesAno = () => {
        setMesAno(!mesAno)
    }
    

    if(mesAno === false){
        setMsgPromocao("");
    }else{
        setMsgPromocao("2 meses Grátis") 
    }

    
   
    return (
        <div className={styles.plan}>
            <div>
            <h1 className={styles.h1}>Selecione seu plano</h1>
            <p className={styles.p}>Você tem a opção de faturamento mensal ou anual.</p>
            </div>
            <form className={styles.form}>
                <section className={styles.containerPai}>
                    <div className={selected === 'Arcade' ? styles.containerProSelected : styles.containerPro}>

                        <input type="radio" id='radioArcade' name="selectPlan" value='Arcade' onClick={() => setSelected('Arcade')} />

                        <label htmlFor='radioArcade'>
                            <img src={arcadeImg} alt="icon Arcade" />
                            <span>Arcade</span>
                            <p className={styles.valor}>{mesAno === false ? "$9/Mês" : "$90/Ano"}</p>
                            <p className={styles.promocao}>{msgPromocao}</p>
                            {/*Variavel*/}
                        </label>
                    </div>

                    <div className={selected === 'Advanced' ? styles.containerProSelected : styles.containerPro}>

                        <input type="radio" id='radioAdvanced' name="selectPlan" value='Advanced' onClick={() => setSelected('Advanced')} />

                        <label htmlFor='radioAdvanced'>
                            <img src={advancedImg} alt="icon Arcade" />


                            <span>Advanced</span>
                            <p className={styles.valor}>{mesAno === false ? "$12/Mês" : "$120/Ano"}</p>
                            <p className={styles.promocao}>{msgPromocao}</p>
                            {/*Variavel*/}
                        </label>
                    </div>

                    <div className={selected === 'Pro' ? styles.containerProSelected : styles.containerPro}>

                        <input type="radio" id='radioPro' name="selectPlan" value='Pro' onClick={() => setSelected('Pro')} />
                        <label htmlFor='radioPro'>

                            <img src={proImg} alt="icon Arcade" />
                            <span>Pro</span>
                            <p className={styles.valor}>{mesAno === false ? "$15/Mês" : "$150/Ano"}</p>
                            <p className={styles.promocao}>{msgPromocao}</p>
                            {/*Variavel*/}
                        </label>
                    </div>
                </section>
                <span className={msg === undefined ? styles.intMsg : styles.actMsg}>{msg}</span>


                <div onClick={hendleMesAno} className={styles.selector}>
                    <span>Mês</span>
                    <label htmlFor="mesAno">
                    <section className={mesAno === true ? styles.activeMesAno : styles.mesAno}> <div className={styles.bola}></div></section></label>
                    <span>Ano</span>
                </div>

                <div className={styles.bts}>
                    <button className={styles.goBack} onClick={hendleGoBack}>Go Back</button>
                    <button className={styles.nextStep} onClick={hendleClick}>Next Step</button>
                </div>
            </form>
        </div>
    );
}

export default SelectPlan;
export const SelectPlanMemo = memo(SelectPlan);