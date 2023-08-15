// import './app.css';
import styles from '../styles/Home.module.css';

function app() {




    const lista = [
        {
            nome: "anderson",
            email: "tuche@tuche.com.br",
            elegal: false,

        },
        {
            nome: "luiz",
            email: "luiz@luiz.com.br",
            elegal: true,

        },
        {
            nome: "jane",
            email: "jane@jane.com.br",
            elegal: true,

        },
        {
            nome: "david",
            email: "david@david.com.br",
            elegal: false,

        },
    ]

    const mercado =[
        {
            nome:"assai",
            cidade:"ribeirao pires",
            fruta:"abacaxi",
        },
        {
            nome:"joanim",
            cidade:"maua",
            fruta:"abacaxi",
        },
        {
            nome:"coop",
            cidade:"santo andre",
            fruta:"morango",
        },
    ]



    const fitrando = lista.filter(itemlista => {
        return itemlista.elegal === false
    })

    const exercicio2 = mercado.filter(itemmercado =>{
        return itemmercado.fruta === 'abacaxi'
    })

    // listagem com 4 objetos cada objeto contendo 3 itens diversos, e item boolean
    // só dois sejam true dois vão ser false e exiba os itens que tem esse "false"//

    //outra lista que tenha 3 objetos com 3 strings e que

    return (
        <>
            <div className="app">
                {
                    fitrando.map(itemlista => {
                        return (
                            <>
                                <p>{itemlista.nome}</p>
                                <p>{itemlista.email}</p>
                            </>
                        )
                    })
                }
            </div>

   
            <div className='app'>
                {
                    exercicio2.map(itemmercado =>{
                        return (
                            <>
                            <p></p>
                            <p>{itemmercado.nome}</p>
                            <p>{itemmercado.cidade}</p>
                            <p>{itemmercado.fruta}</p>
                            </>

                        )
                    })
                }
                

            </div>
        </>
    );
}

export default app;





