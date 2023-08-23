import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css';


//fazer aparecer a lista da seleção brasileira, só que voce tera 3 botões para trocar
//os nomes da seleção brasileira, para corinthians, do são paulo e do palmeiras 11 jogadores

//uma função que mude na tela 10 nomes diferentes, ao clicar em um botão

function home() {

    const [seleção, setSeleção] = useState()
    const [corinthians, setElenco] = useState('cassio, fagner, maycon, adison, gil, renato augusto, roger guedes, romero, pyton, douglas, yuri alberto ')
    const [saoPaulo, setEquipe] = useState('galoppo, igor, lucas, caio, james, jonathan, rafinha, alan, gabriel, alexandre, patryck  ')
    const [palmeiras, setTime] = useState('artur, gustavo, eduardo, eduard, raphael, gabriel, josé, marcos, rony, breno, richard')
    const [teste, seteTeste] = useState('selecao')

    const [nomes, setGalera] = useState()
    const [apelidos, setLoucos] = useState('tuche, sinistro, espalha lixo, belinha, bolso, thor, gi, manu, zé ruela, duende')

    useEffect(() => {
        if (teste === 'corinthians') {
            setElenco('romario, dunga, beto, rivaldo, roberto carlos, lucio, ronaldo, ronaldinho, kaka, edilson, dida ')
            setSeleção('corinthians')
        }

        else if (teste === 'saopaulo') {
            setEquipe('romario, dunga, beto, rivaldo, roberto carlos, lucio, ronaldo, ronaldinho, kaka, edilson, dida ')
            setSeleção('saopaulo')
        }
        else if (teste === 'palmeiras') {
            setTime('romario, dunga, beto, rivaldo, roberto carlos, lucio, ronaldo, ronaldinho, kaka, edilson, dida ')
            setSeleção('palmeiras')
        }

        else if(teste === 'apelidos'){
            setLoucos('eduardo, marcelo, teteu, vitor, yan, betinho, douglas, caio, felipe, vinicios')
            setGalera('apelidos')
        }

        
    }, [teste]);

// segundo exercicio//




    return (
        <>
            {corinthians}<br />
            {saoPaulo}<br />
            {palmeiras}<br />

            {apelidos}

            <button onClick={() => seteTeste('corinthians')}>Corinthians</button>
            <button onClick={() => seteTeste('saopaulo')}>São Paulo</button>
            <button onClick={() => seteTeste('palmeiras')}>Palmeiras</button>

            <button onClick={() => seteTeste('apelidos')}>nomes/apelidos</button>

        </>

    )
}

export default home;













