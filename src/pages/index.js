// import './app.css';
import styles from '../styles/Home.module.css';

function app() {
    //onclick no click
    //onchange é na mudança

    // fazer um input com onchange que o a pessoa digitar ele vai somar com uma variavel
    // com o valor 4 e vai retornar o alert com o resultado

    //fazer um click numa div com texto qualquer que retorne um alert o texto "você conseguiu"
    // de uma variavel
    const botao = 4

    // console.log(JSON.parse('4'))

    return (

        <div className="app">
            <form>
                <label>Nome:</label>
                <input onChange={(e) => { alert(JSON.parse(e.target.value) + botao) }}/>
                
                
                <div>
                    <p onClick={() => { alert('voce conseguiu') }}>anderson tuche</p>
                </div>
            </form>
        </div>

    );
}

export default app;





