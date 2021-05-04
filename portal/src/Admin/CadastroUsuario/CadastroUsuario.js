import React, { useState } from 'react';
import axios from 'axios';

import {
  Titulo,
  Form,
  NomeSobre,
  InputNome,
  InputSobre,
  InputFone,
  InputEmail,
  SelectUsuario,
  BtnSalvar,
  MensErro,
  MensSucesso,
} from './styles';

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [erroEmail, setErroEmail] = useState(null);
  const [erroSenha, setErroSenha] = useState(null);
  const [erroCpf, setErroCpf] = useState(null);
  const [erroTipoUsuario, setErroTipoUsuario] = useState(null);
  const [erro, setErro] = useState(null);
  const [cadSucesso, setCadSucesso] = useState(null);

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

  function validarTipoUsuario(tipoUsuario) {
    if (tipoUsuario === '') {
      setErroTipoUsuario('Selecione o Tipo do Usuário');
      return false;
    } else {
      setErroTipoUsuario(null);
      return true;
    }
  }

  function handleBlurTipoUsuario({ target }) {
    validarTipoUsuario(target.value);
  }

  function handleChangeTipoUsuario({ target }) {
    if (erroTipoUsuario) validarTipoUsuario(target.value);
    setTipoUsuario(target.value);
  }

  const token = sessionStorage.getItem('token');

  const options = {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  };

  const data = {
    firstname: nome,
    lastname: sobreNome,
    cpf: cpf,
    usertype: tipoUsuario,
    email: email,
    password: senha,
  };

  const url = `https://projetoportal.herokuapp.com/users/`;

  function handleSubmit(event) {
    event.preventDefault();
    if (
      validarCPF(cpf) &&
      validarEmail(email) &&
      validarSenha(senha) &&
      validarTipoUsuario(tipoUsuario)
    ) {
      axios
        .post(url, data, options)
        .then(function (response) {
          if (
            response.data.user.firstname &&
            response.data.user.lastname &&
            response.data.user.email &&
            response.data.user.cpf &&
            response.data.user.password &&
            response.data.user.usertype
          ) {
            setCadSucesso('Cadastro Efetuado com Sucesso!');
          }
        })
        .catch(function (error) {
          setErro('CPF ou Email ja existente');
        });
    }
  }

  return (
    <div>
      <Titulo>Cadastro de Usuário</Titulo>
      <Form onSubmit={handleSubmit}>
        <NomeSobre>
          <InputNome
            placeholder="Nome"
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
          <InputSobre
            placeholder="Sobrenome"
            type="text"
            value={sobreNome}
            onChange={(event) => setSobreNome(event.target.value)}
            required
          />
        </NomeSobre>

        <InputFone
          placeholder="CPF"
          type="text"
          value={cpf}
          onChange={handleChangeCPF}
          onBlur={handleBlurCPF}
          required
        />
        {erroCpf && <MensErro>{erroCpf}</MensErro>}

        <InputEmail
          placeholder="Email"
          type="email"
          value={email}
          onChange={handleChangeEmail}
          onBlur={handleBlurEmail}
          required
        />
        {erroEmail && <MensErro>{erroEmail}</MensErro>}

        <InputEmail
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={handleChangeSenha}
          onBlur={handleBlurSenha}
          required
        />
        {erroSenha && <MensErro>{erroSenha}</MensErro>}

        <SelectUsuario
          id="select"
          placeholder="Tipo de Usuario"
          type="number"
          value={tipoUsuario}
          onChange={handleChangeTipoUsuario}
          onBlur={handleBlurTipoUsuario}
          required
        >
          <option value="1" selected>
            Administrador
          </option>
          <option value="2" selected>
            Professor
          </option>
          <option value="3" selected>
            Aluno
          </option>
          <option value="" disabled selected>
            Tipo de Usuário
          </option>
        </SelectUsuario>
        {erroTipoUsuario && <MensErro>{erroTipoUsuario}</MensErro>}
        {erro && <MensErro>{erro}</MensErro>}
        {cadSucesso && <MensSucesso>{cadSucesso}</MensSucesso>}
        <BtnSalvar type="submit">Salvar</BtnSalvar>
      </Form>
    </div>
  );
};

export default CadastroUsuario;
