import React from 'react';

import { DivGeral } from './styles';

const Senha = () => {
  return (
    <DivGeral>
      <h1>Esqueci Senha</h1>
      <form>
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
      </form>
    </DivGeral>
  );
};

export default Senha;
