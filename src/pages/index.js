import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Secao1 from '@/components/Secao1';
import Secao2 from '@/components/Secao2';

function pages() {

const mostrar = true
  return (
    <div className="App">
      <Header/>
      <Secao1 />
      <Secao2/>
      <Footer mostrar={mostrar}/>
    </div>
  );
}

export default pages;