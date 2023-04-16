import React from 'react';

import './Components/Contato/Contato.css';
import './Components/Portfolio/portfolio.css'

import BarraNavegacao from './Components/BarraNavegacao/BarraNavegacao';
import Curriculo from './Components/Curriculo/Curriculo';
import Portfolio from './Components/Portfolio/Portfolio';
import Contato from './Components/Contato/Contato';
import Cabecalho from './Components/Cabecalho/Cabecalho';
import Rodape from  './Components/Rodape/Rodape';


import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (

    <div className="App">
    <BrowserRouter>

    <BarraNavegacao></BarraNavegacao>

    <Cabecalho></Cabecalho>

      <Routes>
        
          <Route index element={<Curriculo />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="contato" element={<Contato />} />
          
      </Routes>
      </BrowserRouter>
   
  <Rodape></Rodape>

    </div>
    
  )
}

export default App
