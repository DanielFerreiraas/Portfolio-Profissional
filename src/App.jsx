import React from 'react';

import './Components/Contato/Contato.css';
import './Components/Portfolio/portfolio.css'

import BarraNavegacao from './Components/BarraNavegacao/BarraNavegacao';
import Curriculo from './Components/Curriculo/Curriculo';
import Portfolio from './Components/Portfolio/Portfolio';
import Contato from './Components/Contato/Contato';
import Cabecalho from './Components/Cabecalho/Cabecalho';
import Rodape from  './Components/Rodape/Rodape';

import api from './api'

import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  const [informacoes, setInformacoes] = React.useState({});
  const [curriculo, setCurriculo] = React.useState({});
  const [portfolio, setPortfolio] = React.useState([]);

  const fetchDados = async () => {
    try {
      const informacao = await api.get('/informacoes/1')
      setInformacoes({
        foto: informacao.data.foto,
        nome: informacao.data.nome,
        cargo: informacao.data.cargo
      });

      const certificacoes = await api.get('/experiencias?tipo=Certificacoes');
      const experienciaAcademica = await api.get('/experiencias?tipo=Academica');
      const experienciaProfissional = await api.get('/experiencias?tipo=Profissional');

      setCurriculo({
        certificacoes: certificacoes.data,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissional: experienciaProfissional.data
      });

      const portfolio = await api.get('/portfolios')
      setPortfolio(portfolio.data);

    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    fetchDados();
  }, []);


  return (

    <div className="App">
    <Cabecalho informacoes={informacoes}></Cabecalho>
    
    <BrowserRouter>

      <BarraNavegacao></BarraNavegacao>

        <Routes>
          
            <Route index element={<Curriculo curriculo={curriculo}/>} />
            <Route path="Portfolio" element={<Portfolio portfolio={portfolio}/>} />
            <Route path="contato" element={<Contato />} />
            
        </Routes>
        
      </BrowserRouter>
   
  <Rodape></Rodape>

    </div>
    
  )
}

export default App
