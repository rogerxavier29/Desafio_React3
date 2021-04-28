import React, { useState } from 'react';

import { DivGeral, Titulo, Form, Imagem } from './styles';

import Imagens from '../../Imagens/undraw_environmental_study_skau 1.svg';
import axios from 'axios';

const Senha = () => {
  const [checkbox, setCheckBox] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [novaSenha, setNovaSenha] = useState('');

  function handleChange({ target }) {
    setCheckBox(target.value);
  }

  const data = {
    email: email,
    cpf: cpf,
    password: novaSenha,
  };

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post('https://projetoportal.herokuapp.com/sessions/resetpassword', data)
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
      <Form onSubmit={handleSubmit}>
        <section>
          <li>
            <input
              id="Estudante"
              type="checkbox"
              value="3"
              checked={checkbox === '3'}
              onChange={handleChange}
            />
            <label htmlFor="Estudante">Estudante</label>
          </li>
          <li>
            <input
              id="Professor"
              type="checkbox"
              value="2"
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
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="">CPF</label>
          <input
            type="text"
            placeholder="CPF"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
          />

          <label htmlFor="">Nova Senha</label>
          <input
            type="text"
            placeholder="Nova Senha"
            value={novaSenha}
            onChange={(event) => setNovaSenha(event.target.value)}
          />

          <button>Redefinir Senha</button>
        </div>
      </Form>
      <Imagem>
        <img src={Imagens} alt="" />
      </Imagem>
    </DivGeral>
  );
};

export default Senha;
