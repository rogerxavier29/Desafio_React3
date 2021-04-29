import React, { useState } from 'react';
import Imagens from '../Imagens/Ellipse 1.svg';
import Modal from 'react-modal';
import MeusDados from './Meus Dados/MeusDados';

import { Cabeçalho, LiNome, LiImg, BotaoFechar } from './styles';

const styles = {
  content: {
    margin: '0 auto',
    top: '100px',
    width: '400px',
    height: '300px',
  },
};

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Cabeçalho>
      <ul>
        <LiNome>
          Bem-vindo, <span>{sessionStorage.getItem('name')}</span>
        </LiNome>
        <LiImg>
          <img src={Imagens} />
          <ul>
            <Modal
              isOpen={openModal}
              onRequestClose={() => setOpenModal(false)}
              style={styles}
            >
              <BotaoFechar onClick={() => setOpenModal(false)}>X</BotaoFechar>
              <MeusDados />
            </Modal>
            <li onClick={() => setOpenModal(true)}>Meus Dados</li>
            <li>
              <a href="/Loginadmin"> Sair</a>
            </li>
          </ul>
        </LiImg>
      </ul>
    </Cabeçalho>
  );
};

export default Header;
