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
  BotaoCarregando,
} from './styles';

const LoginAdmin = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroEmail, setErroEmail] = useState(null);
  const [erroSenha, setErroSenha] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);

  function validarEmail(email) {
    if (email.length === 0) {
      setErroEmail('Preencha um valor');
      return false;
    } else if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)) {
      setErroEmail('Preencha um E-mail válido');
      return false;
    } else {
      setErroEmail(null);
      return true;
    }
  }

  function handleBlurEmail({ target }) {
    validarEmail(target.value);
  }

  function handleChangeEmail({ target }) {
    if (erroEmail) validarEmail(target.value);
    setEmail(target.value);
  }

  function validarSenha(senha) {
    if (senha.lenght === 0) {
      setErroSenha('Preencha uma Senha');
      return false;
    } else if (!/[0-9a-zA-Z]{6,}/.test(senha)) {
      setErroSenha('A senha precisa ter no mínimo 6 caracteres.');
      return false;
    } else {
      setErroSenha(null);
      return true;
    }
  }

  function handleBlurSenha({ target }) {
    validarSenha(target.value);
  }

  function handleChangeSenha({ target }) {
    if (erroSenha) validarSenha(target.value);
    setSenha(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    if (validarEmail(email) && validarSenha(senha)) {
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
              sessionStorage.setItem('checkbox', response.data.user.usertype);
              sessionStorage.setItem('token', response.data.token);
              setLoading(false);
              window.location.replace('/homeadmin');
            }
          },
          (erro) => {
            setErro('Email ou Senha invalidos');
          },
        );
    }
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
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
            required
          />
          {erroEmail && <span>{erroEmail}</span>}

          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Pelo menos 6 caracteres"
            value={senha}
            onChange={handleChangeSenha}
            onBlur={handleBlurSenha}
            required
          />
          {erroSenha && <span>{erroSenha}</span>}

          <EsquecSenha>
            <Link to="/senhaadmin">Esqueci Senha</Link>
          </EsquecSenha>
          {erro && <span>{erro}</span>}
          {loading ? (
            <BotaoCarregando disabled>Carregando...</BotaoCarregando>
          ) : (
            <button type="submit">Entrar</button>
          )}
        </SectionForm>
      </Form>
      <Image>
        <img src={Imagens} alt="Homem desenhando no quadro, estatisticas" />
      </Image>
    </DivGeral>
  );
};

export default LoginAdmin;
