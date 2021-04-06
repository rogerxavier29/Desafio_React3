import React from 'react';
import Imagens from '../Imagens/Ellipse 1.svg';

import { Cabeçalho, LiNome, LiImg } from './styles';

const Header = () => {
  return (
    <Cabeçalho>
      <ul>
        <LiNome>
          Bem-vindo, <span>{sessionStorage.getItem('name')}</span>
        </LiNome>
        <LiImg>
          <img src={Imagens} />
          <ul>
            <li>Meus Dados</li>
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
