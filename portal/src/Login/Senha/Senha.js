import React, { useState } from 'react';

import { DivGeral, Titulo, Form, Imagem } from './styles';

import Imagens from '../../Imagens/undraw_environmental_study_skau 1.svg';
import axios from 'axios';

const Senha = () => {
  const [checkbox, setCheckBox] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [erroEmail, setErroEmail] = useState(null);
  const [erroCpf, setErroCpf] = useState(null);
  const [erroNovaSenha, setErroNovaSenha] = useState(null);

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

  function validarCPF(cpf) {
    if (cpf.length === 0) {
      setCpf('Preencha um valor');
      return false;
    } else if (!/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g.test(cpf)) {
      setErroCpf('Preencha CPF válido');
      return false;
    } else {
      setErroCpf(null);
      return true;
    }
  }

  function handleBlurCPF({ target }) {
    validarCPF(target.value);
  }

  function handleChangeCPF({ target }) {
    if (erroCpf) validarCPF(target.value);
    setCpf(target.value);
  }

  function validarSenhaNova(novaSenha) {
    if (novaSenha.lenght === 0) {
      setErroNovaSenha('Preencha uma Senha');
      return false;
    } else if (!/[0-9a-zA-Z]{6,}/.test(novaSenha)) {
      setErroNovaSenha('A senha precisa ter no mínimo 6 caracteres.');
      return false;
    } else {
      setErroNovaSenha(null);
      return true;
    }
  }

  function handleBlurSenhaNova({ target }) {
    validarSenhaNova(target.value);
  }

  function handleChangeNovaSenha({ target }) {
    if (erroNovaSenha) validarSenhaNova(target.value);
    setNovaSenha(target.value);
  }

  const data = {
    email: email,
    cpf: cpf,
    password: novaSenha,
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (validarEmail(email) && validarCPF(cpf) && validarSenhaNova(novaSenha)) {
      axios
        .post(
          'https://projetoportal.herokuapp.com/sessions/resetpassword',
          data,
        )
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <DivGeral>
      <Titulo>Esqueci Senha</Titulo>
      <Form onSubmit={handleSubmit}>
        <section>
          <li>
            <input
              id="Estudante"
              type="radio"
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
              id="Professor"
              type="radio"
              value="2"
              name="radio"
              checked={checkbox === '2'}
              onChange={handleChange}
            />
            <label htmlFor="Professor">Professor</label>
          </li>
        </section>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
            required
          />
          {erroEmail && <span>{erroEmail}</span>}

          <label htmlFor="">CPF</label>
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={handleChangeCPF}
            onBlur={handleBlurCPF}
            required
          />
          {erroCpf && <span>{erroCpf}</span>}

          <label htmlFor="">Nova Senha</label>
          <input
            type="text"
            placeholder="Nova Senha"
            value={novaSenha}
            onChange={handleChangeNovaSenha}
            onBlur={handleBlurSenhaNova}
            required
          />
          {erroNovaSenha && <span>{erroNovaSenha}</span>}

          <button>Redefinir Senha</button>
        </div>
      </Form>
      <Imagem>
        <img src={Imagens} alt="Homem andando com menus a volta" />
      </Imagem>
    </DivGeral>
  );
};

export default Senha;
