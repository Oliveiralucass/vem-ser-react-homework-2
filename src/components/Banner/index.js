import styles from './Banner.module.css';
import minhaFoto from '../../assets/PICLogo.png';


export default function Banner() {
    return(
        <>
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Criptomoedas
                </h1>

                <p className={styles.paragrafo}>
                    Criptomoedas são moedas digitais que utilizam de criptografia para sua segurança e servem como objeto de troca de pessoa para pessoa (peer-to-peer, ou, P2P) sem necessidade de uma intermediação de terceiros. Utiliza de protocolos Blockchain para garantir a posse de quem às têm.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Criptomoedas"
                />
            </div>
            
        </div>
        </>
    );
};
