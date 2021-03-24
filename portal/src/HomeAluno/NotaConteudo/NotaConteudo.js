import React from 'react';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

import { DivGeral, Linky, Titulo } from './styles';

const NotaConteudo = () => {
  return (
    <DivGeral>
      <Header />
      <Linky>
        <Link to="/homealuno">
          <span>Voltar</span>
        </Link>
      </Linky>
      <Titulo>Português - Turma 345</Titulo>
    </DivGeral>
  );
};

export default NotaConteudo;
