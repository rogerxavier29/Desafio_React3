import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Imagens from '../../Imagens/Esquecisenha.svg';

import { DivGeral, Titulo, DivVoltar, DivForm, Image } from './styles';

const SenhaAdmin = () => {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [erro, setErro] = useState(null);
  const [erroNovaSenha, setErroNovaSenha] = useState(null);
  const [erroEmail, setErroEmail] = useState(null);
  const [erroCpf, setErroCpf] = useState(null);
  const [senhaSucesso, setSenhaSucesso] = useState(null);

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
    if (erroCpf) validarEmail(target.value);
    setCpf(target.value);
  }

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

  function handleSubmit(event) {
    event.preventDefault();

    if (validarEmail(email) && validarCPF(cpf) && validarSenhaNova(novaSenha)) {
      axios
        .post('https://projetoportal.herokuapp.com/sessions/resetpassword', {
          email: email,
          cpf: cpf,
          password: novaSenha,
        })
        .then(
          (response) => {
            if (response.data.email && response.data.cpf) {
              setSenhaSucesso('Nova Senha trocada com Sucesso!');
            }
          },
          (erro) => {
            setErro('Email ou CPF inválidos');
          },
        );
    } else {
      setErro('Favor verificar se os campos estao preenchidos de acordo');
    }
  }

  return (
    <DivGeral>
      <Titulo>Esqueci Senha</Titulo>
      <DivForm>
        <DivVoltar>
          <Link to="/loginadmin">
            <p>Voltar</p>
          </Link>
        </DivVoltar>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
            required
          />
          <label htmlFor="CPF">CPF</label>
          <input
            id="CPF"
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={handleChangeCPF}
            onBlur={handleBlurCPF}
            required
          />
          {erroCpf && <span>{erroCpf}</span>}

          <label htmlFor="novasenha">Nova Senha</label>
          <input
            id="novasenha"
            type="password"
            placeholder="Nova Senha"
            value={novaSenha}
            onChange={handleChangeNovaSenha}
            onBlur={handleBlurSenhaNova}
            required
          />
          {erroNovaSenha && <span>{erroNovaSenha}</span>}
          {erro && <span>{erro}</span>}
          {senhaSucesso && <p>{senhaSucesso}</p>}
          <button type="submit">Redefinir</button>
        </form>
      </DivForm>
      <Image>
        <img src={Imagens} alt="Homem desenhando no quadro, estatisticas" />
      </Image>
    </DivGeral>
  );
};

export default SenhaAdmin;
