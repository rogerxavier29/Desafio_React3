import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Aluno from '../Login/Aluno';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/aluno" component={Aluno} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
