// import './app.css';
import styles from '../styles/Home.module.css';
import { Tuche1, Laranja1 } from '@/utils';

function app() {


    const Tuche = 'uva'
    const Laranja = 'abacaxi'
    

    //criar uma função externa que chame o numero digitado no input no console log acrescentando
    //a mensagem --é muito louco--

    // passar duas variaveis para uma segunda função aonde elas retornem dentro de um alert depois do click

    return (
        <form>

            <input onChange={(e) => { Tuche1(e.target.value, 'e muito legal')}} />

            <button onClick={(e) => { Laranja1('tuche') }}>Enviar</button>
        </form>
    )
}

export default app;





