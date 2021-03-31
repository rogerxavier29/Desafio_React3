import React, { useState } from 'react';
import Header from '../../Header/Header';
import CadastroUsuario from '../CadastroUsuario/CadastroUsuario';
import Modal from 'react-modal';
import styles from './Modal.module.css';

import {
  DivGeral,
  Titulo,
  SectionOptions,
  DivUsuario,
  DivMatricula,
  DivDisciplina,
} from './styles';

const HomeAdmin = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <DivGeral>
      <Header />
      <Titulo>Escolha uma das opções abaixo:</Titulo>
      <SectionOptions>
        <Modal
          className={styles.modal}
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
        <DivDisciplina>
          <p>Cadastrar nova disciplina</p>
        </DivDisciplina>
      </SectionOptions>
    </DivGeral>
  );
};

export default HomeAdmin;
