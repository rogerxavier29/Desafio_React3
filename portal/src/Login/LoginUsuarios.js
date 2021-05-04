import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Imagens from '../Imagens/undraw_environmental_study_skau 1.svg';
import axios from 'axios';

import { DivGeral, Image, Titulo, DivSenha } from './styles';

const LoginUsuarios = () => {
  const [checkbox, setCheckBox] = useState('');
  const [email, setEmail] = useState('');
  const [erroEmail, setErroEmail] = useState(null);
  const [senha, setSenha] = useState('');
  const [erroSenha, setErroSenha] = useState(null);
  const [erro, setErro] = useState(null);

  function handleChange({ target }) {
    setCheckBox(target.value);
  }

  function validarEmail(email) {
    if (email.length === 0) {
      setEmail('Preencha um valor');
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
    if (senha.length === 0) {
      setErroSenha('Preencha uma Senha');
      return false;
    }
    if (!/[0-9a-zA-Z]{6,}/.test(senha)) {
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

  const data = {
    email: email,
    password: senha,
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (checkbox === '3' && validarEmail(email) && validarSenha(senha)) {
      axios.post('https://projetoportal.herokuapp.com/sessions/', data).then(
        (response) => {
          if (response.data.token) {
            sessionStorage.setItem('id', response.data.user._id);
            sessionStorage.setItem('name', response.data.user.firstname);
            sessionStorage.setItem('email', response.data.user.email);
            sessionStorage.setItem('checkbox', response.data.user.usertype);
            sessionStorage.setItem('token', response.data.token);
            window.location.replace('/homealuno');
          }
        },
        (erro) => {
          setErro('Email ou Senha Inválidos');
        },
      );
    } else {
      axios
        .post(`https://projetoportal.herokuapp.com/sessions/teacher`, data)
        .then(
          (response) => {
            if (response.data.token) {
              sessionStorage.setItem('id', response.data.user._id);
              sessionStorage.setItem('name', response.data.user.firstname);
              sessionStorage.setItem('email', response.data.user.email);
              sessionStorage.setItem('checkbox', response.data.user.usertype);
              sessionStorage.setItem('token', response.data.token);
              window.location.replace('/homealuno');
            }
          },
          (erro) => {
            setErro('Email ou Senha Inválidos');
          },
        );
    }
  }

  return (
    <DivGeral>
      <Titulo>Meu Portal</Titulo>
      <form onSubmit={handleSubmit}>
        <section>
          <li>
            <input
              type="radio"
              id="Estudante"
              name="radio"
              value="3"
              checked={checkbox === '3'}
              onChange={handleChange}
              required
            />
            <label htmlFor="Estudante">Estudante</label>
          </li>
          <li>
            <input
              type="radio"
              id="Professor"
              name="radio"
              value="2"
              checked={checkbox === '2'}
              onChange={handleChange}
            />
            <label htmlFor="Professor">Professor</label>
          </li>
        </section>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu Email"
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
            name="senha"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={handleChangeSenha}
            onBlur={handleBlurSenha}
            required
          />
          {erroSenha && <span>{erroSenha}</span>}
          {erro && <span>{erro}</span>}

          <DivSenha>
            <Link to="/Senha">Esqueci Senha</Link>
          </DivSenha>
          <button type="submit">Entrar</button>
        </div>
      </form>
      <Image>
        <img src={Imagens} />
      </Image>
    </DivGeral>
  );
};

export default LoginUsuarios;
