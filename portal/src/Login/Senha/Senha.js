import React from 'react';

import { DivGeral, Titulo, Form, Imagem } from './styles';

import Imagens from '../../Imagens/undraw_environmental_study_skau 1.svg';

const Senha = () => {
  return (
    <DivGeral>
      <Titulo>Esqueci Senha</Titulo>
      <Form>
        <section>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Estudante</label>
          </li>
          <li>
            <input type="checkbox" />
            <label htmlFor="">Professor</label>
          </li>
        </section>
        <div>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email" />

          <label htmlFor="">CPF</label>
          <input type="text" placeholder="CPF" />

          <label htmlFor="">Nova Senha</label>
          <input type="text" placeholder="Nova Senha" />

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
