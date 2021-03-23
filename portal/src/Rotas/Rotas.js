import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Aluno from '../Login/Aluno';
import Senha from '../Login/Senha/Senha';
import HomeAluno from '../HomeAluno/HomeAluno';
import Header from '../Header/Header';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/aluno" component={Aluno} />
        <Route path="/senha" component={Senha} />
        <Header />
        <Route path="/homealuno" component={HomeAluno} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
