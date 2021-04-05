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
  BtnSalvar,
} from './styles';

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('');

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

    axios
      .post(url, data, options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          />
          <InputSobre
            placeholder="Sobrenome"
            type="text"
            value={sobreNome}
            onChange={(event) => setSobreNome(event.target.value)}
          />
        </NomeSobre>

        <InputFone
          placeholder="CPF"
          type="number"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />
        <InputEmail
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <InputEmail
          placeholder="Senha"
          type="password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
        />

        <select
          placeholder="Tipo de Usuario"
          type="number"
          value={tipoUsuario}
          onChange={(event) => setTipoUsuario(event.target.value)}
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
        </select>
        <BtnSalvar type="submit">Salvar</BtnSalvar>
      </Form>
    </div>
  );
};

export default CadastroUsuario;
