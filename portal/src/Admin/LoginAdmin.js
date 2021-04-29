import React, { useState } from 'react';
import Imagens from '../Imagens/undraw_predictive_analytics_kf9n 1.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';

import {
  DivGeral,
  Titulo,
  Form,
  Image,
  SectionForm,
  EsquecSenha,
} from './styles';

const LoginAdmin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post('https://projetoportal.herokuapp.com/sessions/adm', {
        email: email,
        password: senha,
      })
      .then(
        (response) => {
          if (response.data.token) {
            sessionStorage.setItem('id', response.data.user._id);
            sessionStorage.setItem('name', response.data.user.firstname);
            sessionStorage.setItem('email', response.data.user.email);
            sessionStorage.setItem('token', response.data.token);
            window.location.replace('/homeadmin');
          }
        },
        (error) => {
          console.log(error);
        },
      );
  }

  return (
    <DivGeral>
      <Titulo>Portal do Administrador</Titulo>
      <Form onSubmit={handleSubmit}>
        <SectionForm>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Pelo menos 6 caracteres"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
          <EsquecSenha>
            <Link to="/senhaadmin">Esqueci Senha</Link>
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
