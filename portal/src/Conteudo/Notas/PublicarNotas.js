import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';

import {
  DivGeral,
  LinkVoltar,
  Form,
  DivTrabalho,
  Tabela,
  Botao,
} from './styles';

const PublicarNotas = (props) => {
  const [alunos, setAlunos] = useState();

  const token = sessionStorage.getItem('token');

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const _id = props.match.params._id;
  useEffect(() => {
    getalunos();
  }, []);
  const getalunos = async () => {
    axios
      .get(`https://projetoportal.herokuapp.com/listadeAlunos/${_id}`, options)
      .then((res) => {
        console.log(res.data);
        setAlunos(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <DivGeral>
      <Header />
      <LinkVoltar>
        <Link to="/notaconteudo">Voltar</Link>
      </LinkVoltar>
      <Form onSubmit="">
        <DivTrabalho>
          <label htmlFor="NomeTrab">Nome do Trabalho:</label>
          <input id="NomeTrab" type="text" />
          <label htmlFor="ValorTrab">Valor do Trabalho:</label>
          <input id="ValorTrab" type="text" />
        </DivTrabalho>
        <Tabela>
          <thead>
            <tr>
              <th>
                <strong>Alunos</strong>
              </th>
            </tr>
            <tr>
              <th>
                <strong>Notas</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {alunos &&
              alunos.disciplinas.map(({ _id, firstname }) => (
                <tr key={_id}>
                  <td>{firstname}</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              ))}
          </tbody>
        </Tabela>
        <Botao>Salvar</Botao>
      </Form>
    </DivGeral>
  );
};

export default PublicarNotas;
