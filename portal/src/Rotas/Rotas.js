import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Aluno from '../Login/Aluno';
import Senha from '../Login/Senha/Senha';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/aluno" component={Aluno} />
        <Route path="/senha" component={Senha} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
