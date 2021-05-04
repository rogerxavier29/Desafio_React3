import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import CadastroUsuario from '../CadastroUsuario/CadastroUsuario';
import Modal from 'react-modal';
import FormDisciplinas from '../FormDisciplinas/FormDisciplinas';

import {
  DivGeral,
  Titulo,
  SectionOptions,
  DivUsuario,
  DivMatricula,
  DivDisciplina,
  BotaoFechar,
} from './styles';

const styles = {
  content: {
    margin: '0 auto',
    width: '500px',
    height: '500px',
    background: '#fff',
  },
};

const styles2 = {
  content: {
    margin: '0 auto',
    width: '500px',
    height: '400px',
    background: '#fff',
  },
};

const HomeAdmin = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  return (
    <DivGeral>
      <Header />
      <Titulo>Escolha uma das opções abaixo:</Titulo>
      <SectionOptions>
        <Modal
          style={styles}
          isOpen={openModal}
          onRequestClose={() => setOpenModal(false)}
        >
          <BotaoFechar onClick={() => setOpenModal(false)}>X</BotaoFechar>
          <CadastroUsuario />
        </Modal>
        <DivUsuario onClick={() => setOpenModal(true)}>
          <p>Cadastrar novo usuário</p>
        </DivUsuario>
        <DivMatricula>
          <Link to="/matriculaluno">
            <p>Matricular Aluno</p>
          </Link>
        </DivMatricula>
        <Modal
          style={styles2}
          isOpen={openModal2}
          onRequestClose={() => setOpenModal2(false)}
        >
          <BotaoFechar onClick={() => setOpenModal2(false)}>X</BotaoFechar>
          <FormDisciplinas />
        </Modal>
        <DivDisciplina onClick={() => setOpenModal2(true)}>
          <p>Cadastrar nova disciplina</p>
        </DivDisciplina>
      </SectionOptions>
    </DivGeral>
  );
};

export default HomeAdmin;
