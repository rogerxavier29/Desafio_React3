import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

import { DivGeral, Titulo, Section1 } from './styles';

const HomeUsuario = () => {
  const [listaDisciplinas, setListaDisciplinas] = useState();

  const token = sessionStorage.getItem('token');

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const idUser = sessionStorage.getItem('id');
  const usertype = sessionStorage.getItem('checkbox');

  useEffect(() => {
    getlistaDisciplinas();
  }, []);
  const getlistaDisciplinas = async () => {
    axios
      .get(
        `https://projetoportal.herokuapp.com/discipline/${idUser}/${usertype}`,
        options,
      )
      .then((res) => {
        console.log(res.data);
        setListaDisciplinas(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <DivGeral>
      <Header />
      <Titulo>Disciplinas:</Titulo>
      <Section1>
        {usertype === '2'
          ? listaDisciplinas &&
            listaDisciplinas.discipline.map(({ _id, name }) => (
              <Link to={`/notaconteudo/${_id}/${name}`}>
                <div>
                  <p key={_id}>{name}</p>
                  <span>Turma 345</span>
                </div>
              </Link>
            ))
          : listaDisciplinas &&
            listaDisciplinas.userDiscipline[0].disciplines.map(
              ({ _id, name }) => (
                <Link to={`/notaconteudo/${_id}/${name}`}>
                  <div>
                    <p key={_id}>{name}</p>
                    <span>Turma 345</span>
                  </div>
                </Link>
              ),
            )}
      </Section1>
    </DivGeral>
  );
};

export default HomeUsuario;
