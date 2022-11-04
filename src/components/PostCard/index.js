import styles from './PostCard.module.css'

export default function PostCard({ post }) {
    return (
        <>
        <div className={styles.postContainer}>
            <div className={styles.post}>
                    <img 
                        className={styles.capa}
                        src={`/assets/posts/${post.id}/img.png`}
                        alt={"Imagem do Post"}
                    />
                </div>
                <div className={styles.postInfo}>
                    <h2 className={styles.titulo}>{post.titulo}</h2>
                    <span>{post.token}</span>
                </div>
            </div>
         
            <button className={styles.botaoLer}>Saiba Mais</button>
        </>
    );
};