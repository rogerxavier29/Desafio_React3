import React from 'react';
import { Link } from 'react-router-dom';
import Imagens from '../Imagens/undraw_environmental_study_skau 1.svg';

import {
  DivGeral,
  Image,
  Titulo,
  CheckBoxs,
  LinkSenha,
  BtnEntrar,
  Box,
} from './styles';

const Aluno = () => {
  return (
    <DivGeral>
      <Titulo>Meu Portal</Titulo>
      <form>
        <CheckBoxs>
          <li>
            <input id="1" type="checkbox" />
            Estudante
          </li>
          <li>
            <input id="2" type="checkbox" />
            Professor
          </li>
        </CheckBoxs>
        <input name="Email" type="text" />
        <input name="Senha" type="text" />
        <LinkSenha>
          <Link to="">Esqueci Senha</Link>
        </LinkSenha>
        <BtnEntrar>Entrar</BtnEntrar>
      </form>
      <Image>
        <img src={Imagens} />
      </Image>
    </DivGeral>
  );
};

export default Aluno;
