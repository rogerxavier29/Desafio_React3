import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Aluno from '../Login/Aluno';
import Senha from '../Login/Senha/Senha';
import HomeAluno from '../HomeAluno/HomeAluno';
import NotaConteudo from '../HomeAluno/NotaConteudo/NotaConteudo';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/aluno" component={Aluno} />
        <Route path="/senha" component={Senha} />
        <Route path="/homealuno" component={HomeAluno} />
        <Route path="/notaconteudo" component={NotaConteudo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
