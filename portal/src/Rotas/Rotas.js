import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Senha from '../Login/Senha/Senha';
import HomeAluno from '../HomeAluno/HomeAluno';
import NotaConteudo from '../HomeAluno/NotaConteudo/NotaConteudo';
import ApresentacaoConteudo from '../Conteudo/ApresentacaoConteudo';
import LoginAdmin from '../Admin/LoginAdmin';
import HomeAdmin from '../Admin/Home/HomeAdmin';
import MatriculaAluno from '../Admin/MatriculaAluno/MatriculaAluno';
import SenhaAdmin from '../Admin/EsqueciSenha/SenhaAdmin';
import LoginUsuarios from '../Login/LoginUsuarios';
import VisualizacaoConteudo from '../Conteudo/VisualizacaoConteudo/VisualizacaoConteudo';
import PublicarNotas from '../Conteudo/Notas/PublicarNotas';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/loginusuarios" component={LoginUsuarios} />
        <Route path="/senha" component={Senha} />
        <Route path="/homealuno" component={HomeAluno} />
        <Route path="/notaconteudo/:_id/:name" component={NotaConteudo} />
        <Route
          path="/apresentconteudo/:_id/:name"
          component={ApresentacaoConteudo}
        />
        <Route path="/loginadmin" component={LoginAdmin} />
        <Route path="/senhaadmin" component={SenhaAdmin} />
        <Route path="/homeadmin" component={HomeAdmin} />
        <Route path="/matriculaluno" component={MatriculaAluno} />
        <Route
          path="/visualizarconteudo/:name"
          component={VisualizacaoConteudo}
        />
        <Route path="/publicarnotas/:_id" component={PublicarNotas} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
