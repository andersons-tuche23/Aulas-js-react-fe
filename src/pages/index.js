import React, { useEffect } from "react";
import styles from '@/styles/Home.module.css';

// primeira página coloca os 2 links mandando para duas paginas diferenres uma você vai
// tratar a ccondição do split, e na outra você vai tratar a condição da query string

//SPLIT
//primeiro exercicio vc vai montar um link que tenha 3 opções de parametro, você vai
//exibir um conteudo diferente para cada caso

//QUERY STRING
//segundo caso você vai montar um segundo link com 5 opções de parametro, voce vai exibir
//um conteudo proprio, condizente com os 5 parametros

  //htt://localhost:3000/?loja=nike&cor=preto&camiseta&cor=azul



function Home() {
    useEffect(() => {
        const url = window.location.href;


        const splitNike = url.split('nike')[1];
        console.log(splitNike, 'splitNike');


      

    }, []);


    return (
        <>
            <div className={styles.texto}>
                <div className={styles.cores}>
                    <p className={styles.back}></p>
                    <p className={styles.color}></p>
                </div>
                <img className={styles.img} src="/nike.png" width={500} />

            </div>
            
            <div>
                <a href="https://www.pngwing.com/pt/free-png-hmvxc"></a>
            </div>
        </>
    );
}

export default Home;
