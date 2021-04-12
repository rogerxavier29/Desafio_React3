import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Aluno from '../Login/Aluno';
import Senha from '../Login/Senha/Senha';
import HomeAluno from '../HomeAluno/HomeAluno';
import NotaConteudo from '../HomeAluno/NotaConteudo/NotaConteudo';
import ApresentacaoConteudo from '../Conteudo/ApresentacaoConteudo';
import LoginAdmin from '../Admin/LoginAdmin';
import HomeAdmin from '../Admin/Home/HomeAdmin';
import MatriculaAluno from '../Admin/MatriculaAluno/MatriculaAluno';
import SenhaAdmin from '../Admin/EsqueciSenha/SenhaAdmin';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/aluno" component={Aluno} />
        <Route path="/senha" component={Senha} />
        <Route path="/homealuno" component={HomeAluno} />
        <Route path="/notaconteudo" component={NotaConteudo} />
        <Route path="/apresentconteudo" component={ApresentacaoConteudo} />
        <Route path="/Loginadmin" component={LoginAdmin} />
        <Route path="/senhaadmin" component={SenhaAdmin} />
        <Route path="/homeadmin" component={HomeAdmin} />
        <Route path="/matriculaluno" component={MatriculaAluno} />
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
