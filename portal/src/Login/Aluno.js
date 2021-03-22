import React from 'react';
import { Link } from 'react-router-dom';
import Imagens from '../Imagens/undraw_environmental_study_skau 1.svg';

import { DivGeral, Image, Titulo, DivSenha } from './styles';

const Aluno = () => {
  return (
    <DivGeral>
      <Titulo>Meu Portal</Titulo>
      <form>
        <section>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Estudante</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>Professor</label>
          </li>
        </section>
        <div>
          <label>Email</label>
          <input type="text" />
          <label>Senha</label>
          <input type="text" />
          <DivSenha>
            <Link to="/Senha">Esqueci Senha</Link>
          </DivSenha>
          <button>Entrar</button>
        </div>
      </form>
      <Image>
        <img src={Imagens} />
      </Image>
    </DivGeral>
  );
};

export default Aluno;
