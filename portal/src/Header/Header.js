import React from 'react';
import Imagens from '../Imagens/Ellipse 1.svg';

import { Cabeçalho } from './styles';

const Header = () => {
  return (
    <Cabeçalho>
      <p>Bem-vindo, fulaninho</p>
      <img src={Imagens} />
    </Cabeçalho>
  );
};

export default Header;
