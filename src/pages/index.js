import React, { useState } from "react";
import styles from '../styles/Home.module.css';


function home() {
    // use state
    //voce tera que fazer uma função que muda dois  states que exibe na tela numa mesma frase

    //voce tera que fazer um state como contador, * 4


    const [anime, setTeste] = useState('naruto shippuden é bom')
    const [contador, setTeste2] = useState(0)
    

    return (
        <>
            {anime}

            {contador}

            
                <div className={styles.exercicio}>
                    <button onClick={() => setTeste('mas prefiro dragon ball')}>trocar o nome</button>
                </div>

                <div>
                    <button onClick={() => setTeste2(contador + 4)}>trocar o numero</button>
                </div>
            
        </>
    )
}

export default home;





