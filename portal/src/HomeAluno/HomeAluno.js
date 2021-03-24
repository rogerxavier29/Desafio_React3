import React from 'react';
import Header from '../Header/Header';

import {
  DivGeral,
  Titulo,
  Container,
  Section1,
  Section2,
  Section3,
} from './styles';

const HomeAluno = () => {
  return (
    <DivGeral>
      <Header />
      <Titulo>Disciplinas:</Titulo>
      <Container>
        <Section1>
          <div>
            <p>Português</p>
            <span>Turma 345</span>
          </div>
          <div>
            <p>Português</p>
            <span>Turma 345</span>
          </div>
          <div>
            <p>Português</p>
            <span>Turma 345</span>
          </div>
          <div>
            <p>Português</p>
            <span>Turma 345</span>
          </div>
        </Section1>
        <Section2>
          <div>
            <p>Português</p>
            <span>Turma 345</span>
          </div>
          <div>
            <p>Português</p>
            <span>Turma 345</span>
          </div>
          <div>
            <p>Português</p>
            <span>Turma 345</span>
          </div>
          <div>
            <p>Português</p>
            <span>Turma 345</span>
          </div>
        </Section2>
        <Section3>
          <div>
            <p>Português</p>
            <span>Turma 345</span>
          </div>
          <div>
            <p>Português</p>
            <span>Turma 345</span>
          </div>
          <div>
            <p>Português</p>
            <span>Turma 345</span>
          </div>
          <div>
            <p>Português</p>
            <span>Turma 345</span>
          </div>
        </Section3>
      </Container>
    </DivGeral>
  );
};

export default HomeAluno;
