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
          <div>Portugues</div>
          <div>Portugues</div>
          <div>Portugues</div>
          <div>Portugues</div>
        </Section1>
        <Section2>
          <div>Portugues</div>
          <div>Portugues</div>
          <div>Portugues</div>
          <div>Portugues</div>
        </Section2>
        <Section3>
          <div>Portugues</div>
          <div>Portugues</div>
          <div>Portugues</div>
          <div>Portugues</div>
        </Section3>
      </Container>
    </DivGeral>
  );
};

export default HomeAluno;
