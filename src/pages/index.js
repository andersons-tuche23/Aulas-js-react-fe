import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Secao from '@/components/Secao';

// vai fazer 4cards que usem o mesmo componente porem mostre texto diferentes
// mostrar 2 links que cosomem o mesmo componente que vai ser passado um boleano pro props, se
//eu passar true exibe o link, se eu passar false ou não passa nada, não exibe o link

function pages() {

const mostrar = true
const textoFooter= "esse é o texto do footer"
  return (
    <div className="App">
      <Header texto={"esse é o texto do heade"} image={mostrar}/>
      <Secao texto={"esse é o texto da seção1"}/>
      <Secao texto={"esse é o texto da seção2"}/>
      <Footer texto={textoFooter}/>
    </div>
  );
}

export default pages;