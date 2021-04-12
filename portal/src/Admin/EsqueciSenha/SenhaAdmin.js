import React, { useState } from 'react';
import axios from 'axios';
import Imagens from '../../Imagens/Esquecisenha.svg';

import { DivGeral, Titulo, DivForm, Image } from './styles';

const SenhaAdmin = () => {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post('https://projetoportal.herokuapp.com/sessions/resetpassword', {
        email: email,
        cpf: cpf,
        password: novaSenha,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <DivGeral>
      <Titulo>Esqueci Senha</Titulo>
      <DivForm>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor="CPF">CPF</label>
          <input
            id="CPF"
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
          />
          <label htmlFor="novasenha">Nova Senha</label>
          <input
            id="novasenha"
            type="password"
            placeholder="Nova Senha"
            value={novaSenha}
            onChange={(event) => setNovaSenha(event.target.value)}
          />
          <button type="submit">Redefinir</button>
        </form>
      </DivForm>
      <Image>
        <img src={Imagens} />
      </Image>
    </DivGeral>
  );
};

export default SenhaAdmin;
