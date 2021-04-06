import React, { useState } from 'react';
import Header from '../../Header/Header';
import CadastroUsuario from '../CadastroUsuario/CadastroUsuario';
import Modal from 'react-modal';

import {
  DivGeral,
  Titulo,
  SectionOptions,
  DivUsuario,
  DivMatricula,
  DivDisciplina,
} from './styles';
import FormDisciplinas from '../FormDisciplinas/FormDisciplinas';

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
          <CadastroUsuario />
        </Modal>
        <DivUsuario onClick={() => setOpenModal(true)}>
          <p>Cadastrar novo usuário</p>
        </DivUsuario>
        <DivMatricula>
          <p>Matricular Aluno</p>
        </DivMatricula>
        <Modal
          style={styles2}
          isOpen={openModal2}
          onRequestClose={() => setOpenModal2(false)}
        >
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
