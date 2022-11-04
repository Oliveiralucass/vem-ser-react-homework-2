import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";
import homeImg from "../../assets/CryptoPICLogo.png"

export default function Menu () {
    return (
        <>
            <header>
                <nav className={styles.navegacao}>
                        
                    <MenuLink className={styles.logoImagem} to="/">
                        <img src={homeImg} alt="Logo"/>
                    </MenuLink>

                    <MenuLink to="/">
                        Início  
                    </MenuLink>

                    <MenuLink to="/Criptomoedas">
                    Criptomoedas
                    </MenuLink>
                </nav>
            </header>
        </>
    );
};