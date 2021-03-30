import React from 'react';
import Imagens from '../Imagens/undraw_predictive_analytics_kf9n 1.svg';
import { Link } from 'react-router-dom';

import {
  DivGeral,
  Titulo,
  Form,
  Image,
  SectionForm,
  EsquecSenha,
} from './styles';

const LoginAdmin = () => {
  return (
    <DivGeral>
      <Titulo>Portal do Administrador</Titulo>
      <Form action="">
        <SectionForm>
          <label htmlFor="">Email</label>
          <input id="email" type="email" />
          <label htmlFor="senha">Senha</label>
          <input id="senha" type="text" />
          <EsquecSenha>
            <Link to="">Esqueci Senha</Link>
          </EsquecSenha>
          <button type="submit">Entrar</button>
        </SectionForm>
      </Form>
      <Image>
        <img src={Imagens} />
      </Image>
    </DivGeral>
  );
};

export default LoginAdmin;
