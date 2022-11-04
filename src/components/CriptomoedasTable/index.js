import styles from "./CriptomoedasTable.module.css"
export default function CriptomoedasTable({ cripto }) {



    return(
        <>
            <td className={styles.criptoId}>{cripto.id}</td>
            <td className={styles.criptoImg}>
                <img src={`/assets/posts/${cripto.id}/img.png`} alt="Cripto Logo"/>
            </td>
            <td className={styles.criptoTitle}>{cripto.titulo}</td>
            <td className={styles.criptoToken}>{cripto.token}</td>
        </>
    )
}