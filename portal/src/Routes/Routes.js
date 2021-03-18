import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Aluno from '../Login/Aluno';

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginAluno" component={Aluno} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes;
