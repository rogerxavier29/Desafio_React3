import React from 'react';
import Header from '../../Header/Header';

import {
  DivGeral,
  Titulo,
  SectionOptions,
  DivUsuario,
  DivMatricula,
  DivDisciplina,
} from './styles';

const HomeAdmin = () => {
  return (
    <DivGeral>
      <Header />
      <Titulo>Escolha uma das opções abaixo:</Titulo>
      <SectionOptions>
        <DivUsuario>
          <p>Cadastrar novo usuário</p>
        </DivUsuario>
        <DivMatricula>
          <p>Matricular Aluno</p>
        </DivMatricula>
        <DivDisciplina>
          <p>Cadastrar nova disciplina</p>
        </DivDisciplina>
      </SectionOptions>
    </DivGeral>
  );
};

export default HomeAdmin;
