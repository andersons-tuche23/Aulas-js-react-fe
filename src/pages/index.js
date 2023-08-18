// import './app.css';
import styles from '../styles/Home.module.css';
import { Teste, Click} from '@/utils';

function app() {

    // quero que vôce faça uma condição que se o valor digitado no imput for --Guitarra--
    // vôce vai responder o console 'tem cordas',  se digitar --Bateria-- console 'tem pedal'
    // e vôce digitar --Microfone-- coloca 'tem fio',
    //não exite esse instrumento

    //quero vôce faça um console com switch case que faça algo com 3 opções e uma opção para quando não
    // atender as 3 opções


    
    return (
    <form className={styles.form}>

            <input className={styles.input} onChange={(e) => {Teste(e.target.value)}} />

            <input className={styles.input} onChange={(e) => {Click(e.target.value)}} />

            {/* <button onClick={(e) => { Click('tuche') }}>Enviar</button> */}

            

        </form>
    )
}

export default app;





