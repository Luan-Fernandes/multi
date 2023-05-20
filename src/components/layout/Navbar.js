import styles from './Navbar.module.css';

function Navbar({ step }) {
    
    return (
        <div>

            <nav className={styles.navbar}>

                <ul className={styles.list}>

                    <div className={styles.step1}>
                        <li className={step === 1 ? styles.pagselect : styles.bolas }><h1>1</h1></li>
                        <div>
                            <span>STEP1</span>
                            <p>INFO</p>

                        </div>
                    </div>

                    <div className={styles.step2}>
                        <li className={step === 2 ? styles.pagselect : styles.bolas}><h1>2</h1></li>
                        <div>
                            <span>STEP2</span>
                            <p>SELECT PLAN</p>
                        </div>
                    </div>

                    <div className={styles.step3}>
                        <li className={step === 3 ? styles.pagselect : styles.bolas}><h1>3</h1></li>
                        <div>
                            <span>STEP2</span>
                            <p>ADD ONS</p>
                        </div>
                    </div>

                    <div className={styles.step4}>
                        <li className={step === 4 ? styles.pagselect : styles.bolas}><h1>4</h1></li>
                        <div>
                            <span>STEP4</span>
                            <p>SUMMARY</p>
                        </div>
                    </div>
                </ul>
            </nav>
            
        </div>
    );
}

export default Navbar;