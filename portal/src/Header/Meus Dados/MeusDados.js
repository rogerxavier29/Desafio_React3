import React, { useEffect, useState } from 'react';

import { DivGeral, TituloDados } from './styles';
import axios from 'axios';

const MeusDados = () => {
  const [dadosUsuario, setDadosUsuario] = useState();

  const token = sessionStorage.getItem('token');

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const idUsuarios = sessionStorage.getItem('id');

  useEffect(() => {
    getdadosUsuario();
  }, []);
  const getdadosUsuario = async () => {
    axios
      .get(`https://projetoportal.herokuapp.com/users/${idUsuarios}`, options)
      .then((res) => {
        console.log(res.data);
        setDadosUsuario(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <DivGeral>
      <TituloDados>Meus Dados:</TituloDados>
      {dadosUsuario &&
        dadosUsuario.user.map(({ _id, firstname, lastname, cpf, email }) => (
          <section key={_id}>
            <div>
              <span>Nome:</span>
              <p>{firstname}</p>
            </div>
            <div>
              <span>Sobrenome:</span>
              <p>{lastname}</p>
            </div>
            <div>
              <span>CPF:</span>
              <p>{cpf}</p>
            </div>
            <div>
              <span>Email:</span>
              <p>{email}</p>
            </div>
          </section>
        ))}
    </DivGeral>
  );
};

export default MeusDados;
