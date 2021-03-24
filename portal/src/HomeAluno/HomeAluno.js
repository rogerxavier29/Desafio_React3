import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/notaconteudo">
            <div>
              <p>Português</p>
              <span>Turma 345</span>
            </div>
          </Link>

          <Link to="/notaconteudo">
            <div>
              <p>Português</p>
              <span>Turma 345</span>
            </div>
          </Link>

          <Link to="/notaconteudo">
            <div>
              <p>Português</p>
              <span>Turma 345</span>
            </div>
          </Link>

          <Link to="/notaconteudo">
            <div>
              <p>Português</p>
              <span>Turma 345</span>
            </div>
          </Link>
        </Section1>

        <Section2>
          <Link to="/notaconteudo">
            <div>
              <p>Português</p>
              <span>Turma 345</span>
            </div>
          </Link>

          <Link to="/notaconteudo">
            <div>
              <p>Português</p>
              <span>Turma 345</span>
            </div>
          </Link>

          <Link to="/notaconteudo">
            <div>
              <p>Português</p>
              <span>Turma 345</span>
            </div>
          </Link>

          <Link to="/notaconteudo">
            <div>
              <p>Português</p>
              <span>Turma 345</span>
            </div>
          </Link>
        </Section2>

        <Section3>
          <Link to="/notaconteudo">
            <div>
              <p>Português</p>
              <span>Turma 345</span>
            </div>
          </Link>

          <Link to="/notaconteudo">
            <div>
              <p>Português</p>
              <span>Turma 345</span>
            </div>
          </Link>

          <Link to="/notaconteudo">
            <div>
              <p>Português</p>
              <span>Turma 345</span>
            </div>
          </Link>

          <Link to="/notaconteudo">
            <div>
              <p>Português</p>
              <span>Turma 345</span>
            </div>
          </Link>
        </Section3>
      </Container>
    </DivGeral>
  );
};

export default HomeAluno;
