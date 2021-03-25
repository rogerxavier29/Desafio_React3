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
            <Link to="/apresentconteudo">
              <p>Linguagem Estruturada</p>
            </Link>
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

        <Section2>
          <div>
            <p>Trabalho 1</p>
            <p>Peso 2.0</p>
            <p>Nota 10</p>
          </div>
          <div>
            <p>Trabalho 1</p>
            <p>Peso 2.0</p>
            <p>Nota 10</p>
          </div>
          <div>
            <p>Trabalho 1</p>
            <p>Peso 2.0</p>
            <p>Nota 10</p>
          </div>
          <div>
            <p>Trabalho 1</p>
            <p>Peso 2.0</p>
            <p>Nota 10</p>
          </div>
        </Section2>
      </SubDiv>
    </DivGeral>
  );
};

export default NotaConteudo;
