import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeAluno from '../HomeAluno/HomeAluno';

import Aluno from '../Login/Aluno';
import Senha from '../Login/Senha/Senha';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/aluno" component={Aluno} />
        <Route path="/senha" component={Senha} />
        <Route path="/HomeAluno" component={HomeAluno} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
