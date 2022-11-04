import CriptomoedasTable from "../../components/CriptomoedasTable";
import posts from "../../json/posts.json"
import styles from "./Criptomoedas.module.css"
import { useState, useEffect } from "react";
import axios from 'axios'
import Banner from "../../components/Banner";

export default function Criptomoedas() {

    const url = "https://api.coingecko.com/api/v3/simple/price?ids=aave%2Cethereum%2Cusd-coin%2Cbitcoin%2Cchainlink%2Cbinancecoin%2Cinternet-computer%2Ctether&vs_currencies=brl"


    const [ criptos, setCriptos ] = useState([])

    useEffect(() => {
        axios.get(url)
        .then((response) =>{
            setCriptos(response.data);
        })

        .catch(()=>{
            console.log("deu errado");
        })

    }, [])

    let criptoArray = Object.keys(criptos).map(key => {
         return criptos[key];
    })

    return (
        
        <>    
        <Banner /> 

            
            <div>
                <h2>TESTE</h2>
                {criptoArray.map((cripto) => {
                    <p>{cripto.brl}</p>
                })}
                <h2> FIM DO TESTE</h2>
            </div>
        
            <h1>Lista de Criptomoedas</h1>
            <h3>Acompanhe os preços e as mudanças de todas as criptomoedas</h3>
            <table>
                <thead>
                    <tr>    
                        <th>#</th>
                        <th>Logo</th>
                        <th>Nome</th>
                        <th>Token</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody className={styles.criptoTable}>
                    {posts.map ((post) => {
                        return <tr key={post.id}>
                        <CriptomoedasTable cripto={post}/>  
                        <td>MANUTENÇÃO</td>
                    </tr>
                    }
                        
                    )}  
                </tbody>
            </table>
        </>
    );
};
