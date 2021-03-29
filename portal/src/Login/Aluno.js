import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Imagens from '../Imagens/undraw_environmental_study_skau 1.svg';

import { DivGeral, Image, Titulo, DivSenha } from './styles';

const Aluno = () => {
  const [checkbox, setCheckBox] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(handleSubmit);
  }

  function handleChange({ target }) {
    setCheckBox(target.value);
  }

  return (
    <DivGeral>
      <Titulo>Meu Portal</Titulo>
      <form action="" onSubmit={handleSubmit}>
        <section>
          <li>
            <input
              type="checkbox"
              id="Estudante"
              value="Estudante"
              checked={checkbox === 'Estudante'}
              onChange={handleChange}
            />
            <label htmlFor="Estudante">Estudante</label>
          </li>
          <li>
            <input
              type="checkbox"
              id="Professor"
              value="Professor"
              checked={checkbox === 'Professor'}
              onChange={handleChange}
            />
            <label htmlFor="Professor">Professor</label>
          </li>
          {checkbox}
        </section>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {email}
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            name="senha"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
          {senha}
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

export default Aluno;
