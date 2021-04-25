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
  const [nomeTrabalho, setNomeTrabalho] = useState();
  const [valorTrabalho, setValorTrabalho] = useState();

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

  const data = {
    notas: {
      nomeNota: nomeTrabalho,
      pesoNota: valorTrabalho,
    },
    alunos: {
      valorNota: alunos.nota,
    },
  };

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(`https://projetoportal.herokuapp.com/nota/${_id}`, data, options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <DivGeral>
      <Header />
      <LinkVoltar>
        <Link to="/notaconteudo">Voltar</Link>
      </LinkVoltar>
      <Form onSubmit={handleSubmit}>
        <DivTrabalho>
          <label htmlFor="NomeTrab">Nome do Trabalho:</label>
          <input
            id="NomeTrab"
            type="text"
            value={nomeTrabalho}
            onChange={(event) => setNomeTrabalho(event.target.value)}
            required
          />
          <label htmlFor="ValorTrab">Valor do Trabalho:</label>
          <input
            id="ValorTrab"
            type="text"
            value={valorTrabalho}
            onChange={(event) => setValorTrabalho(event.target.value)}
            required
          />
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
              alunos.disciplinas.map((aluno, index, array) => (
                <tr key={index}>
                  <td>
                    {aluno.firstname} {aluno.lastname}
                  </td>
                  <td>
                    <input
                      type="text"
                      value={aluno.nota}
                      onChange={(event) => {
                        let aux = alunos;
                        aux[index] = { ...aluno, nota: event.target.value };
                        setAlunos(aux);
                      }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </Tabela>
        <Botao type="submit">Salvar</Botao>
      </Form>
    </DivGeral>
  );
};

export default PublicarNotas;
