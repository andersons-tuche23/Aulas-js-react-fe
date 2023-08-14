// import './app.css';
import styles from '../styles/Home.module.css';

function app(){

    // o Map sempre é usado para trazer dados de um array []
    
    
    const parentes = [
        {
            nome: "anderson",
            data_de_nascimento:"07/07/1983",
            idade:40,
            telefone:8888-8888,
            mais_de_1: true,
            nome_da_mae: "carmem",
            nome_do_pai:"jose",
        },
        {
            nome: "giovanna",
            data_de_nascimento:"12/09/2005",
            idade:17,
            telefone:5555-5555,
            mais_de_1: true,
            nome_da_mae:"graziele", 
            nome_do_pai:"anderson",
        },
        {
            nome: "pietro",
            data_de_nascimento:"11/07/2019",
            idade:4,
            telefone:2222-2222,
            mais_de_2: true,
            nome_da_mae: "graziele",
            nome_do_pai:"",
        },
        {
            nome:"julia",
            data_de_nascimento:"15/08/2017",
            idade:6,
            telefone:4444-4444,
            mais_de_1: true,
            nome_da_mae: "patricia",
            nome_do_pai:"",
        },
        {
            nome: "robson",
            data_de_nascimento:"14/08/2022",
            idade:1,
            telefone:7777-7777,
            mais_de_1: true,
            nome_da_mae:"joelma",
            nome_do_pai:"",
        }
    ] 

    //fazer uma lista exibindo 5 pessoas com nome, idade, data de nascimentto e nome da mãe, e para 3 pessoas não vai ter o nome do pai
// o nome do pai, porem quem não tiver o pai nem o  titulo pai pode aparecer//
    return(
        <div className="app">
            {
            parentes.map(item =>{
                return(
                    <div style={{display:'flex', gap:'25px', justifyContent:'space-evenly'}}>
                    <div>nome:{item.nome}</div>
                    <div>data_de_nascimento:{item.data_de_nascimento}</div>
                    <div>idade:{item.idade}</div>
                    <div>telefone:{item.telefone}</div>
                    <div>nome_da_mae:{item.nome_da_mae}</div>
                     {item.nome_do_pai &&
                    <div>nome_do_pai{item.nome_do_pai}</div>
                     }
                    </div>   
                )
            })
}
        </div>
    );
}

export default app;