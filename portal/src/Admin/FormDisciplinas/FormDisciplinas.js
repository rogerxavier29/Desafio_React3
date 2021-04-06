import React, { useState } from 'react';
import axios from 'axios';

import { Titulo, Form, BtnSalvar } from './styles';

const FormDisciplinas = () => {
  const [nomeDisc, setNomeDisc] = useState('');
  const [matriculaProf, setMatriculaProf] = useState('');
  const [quantAlunos, setQuantAlunos] = useState('');

  const token = sessionStorage.getItem('token');

  const options = {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  };

  const url = `https://projetoportal.herokuapp.com/discipline/`;

  const data = {
    name: nomeDisc,
    idTeacher: matriculaProf,
    numberStudents: quantAlunos,
  };

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(url, data, options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Titulo>Cadastro de Disciplinas</Titulo>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nomeDisc}
          onChange={(event) => setNomeDisc(event.target.value)}
        />
        <input
          type="text"
          placeholder="Matrícula Professor Responsável"
          value={matriculaProf}
          onChange={(event) => setMatriculaProf(event.target.value)}
        />
        <input
          type="text"
          placeholder="Quantidade de Alunos"
          value={quantAlunos}
          onChange={(event) => setQuantAlunos(event.target.value)}
        />
        <BtnSalvar type="submit">Salvar</BtnSalvar>
      </Form>
    </div>
  );
};

export default FormDisciplinas;
