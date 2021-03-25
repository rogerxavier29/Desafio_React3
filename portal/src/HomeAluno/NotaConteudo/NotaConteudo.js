import React from 'react';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

import { DivGeral, Linky, Titulo, SubDiv, Section1, Section2 } from './styles';

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
      <SubDiv>
        <Section1>
          <div>
            <p>Linguagem Estruturada</p>
          </div>
          <div>
            <p>Linguagem Estruturada</p>
          </div>
          <div>
            <p>Linguagem Estruturada</p>
          </div>
          <div>
            <p>Linguagem Estruturada</p>
          </div>
        </Section1>

        <Section2></Section2>
      </SubDiv>
    </DivGeral>
  );
};

export default NotaConteudo;
