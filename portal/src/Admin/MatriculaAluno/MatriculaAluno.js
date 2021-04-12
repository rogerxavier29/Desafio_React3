import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

import { DivVoltar, Form, SectionSelect, DivBtn } from './styles';
import axios from 'axios';

const MatriculaAluno = () => {
  const [disciplinas, setDisciplinas] = useState();
  const [cpf, setCpf] = useState('');
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState({});
  const [disciplinaSelecionada2, setDisciplinaSelecionada2] = useState({});
  const [disciplinaSelecionada3, setDisciplinaSelecionada3] = useState({});
  const [disciplinaSelecionada4, setDisciplinaSelecionada4] = useState({});
  const [disciplinaSelecionada5, setDisciplinaSelecionada5] = useState({});
  const [disciplinaSelecionada6, setDisciplinaSelecionada6] = useState({});

  const token = sessionStorage.getItem('token');

  const options = {
    headers: {
      Authorization: `Bearer ${token} `,
    },
  };

  const url = `https://projetoportal.herokuapp.com/content/`;

  useEffect(() => {
    getdisciplinas();
  }, []);
  const getdisciplinas = async () => {
    axios
      .get(url, options)
      .then((res) => {
        console.log(res.data);
        setDisciplinas(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const dataDisciplinas = {
    disciplines: [
      disciplinaSelecionada,
      disciplinaSelecionada2,
      disciplinaSelecionada3,
      disciplinaSelecionada4,
      disciplinaSelecionada5,
      disciplinaSelecionada6,
    ],
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        `https://projetoportal.herokuapp.com/registration/` + cpf,
        dataDisciplinas,
        options,
      )
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Header />
      <DivVoltar>
        <Link to="/homeadmin">Voltar</Link>
        <Form onSubmit={handleSubmit}>
          <input
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            type="text"
            placeholder="N° de matrícula aluno"
            required
          />
          <SectionSelect>
            <select
              value={disciplinaSelecionada}
              onChange={(event) => setDisciplinaSelecionada(event.target.value)}
            >
              {disciplinas &&
                disciplinas.discipline.map(({ _id, name }) => (
                  <option key={_id} value={_id}>
                    {name}
                  </option>
                ))}
            </select>
            <select
              value={disciplinaSelecionada2}
              onChange={(event) =>
                setDisciplinaSelecionada2(event.target.value)
              }
            >
              {disciplinas &&
                disciplinas.discipline.map(({ _id, name }) => (
                  <option key={_id} value={_id}>
                    {name}
                  </option>
                ))}
            </select>
            <select
              value={disciplinaSelecionada3}
              onChange={(event) =>
                setDisciplinaSelecionada3(event.target.value)
              }
            >
              {disciplinas &&
                disciplinas.discipline.map(({ _id, name }) => (
                  <option key={_id} value={_id}>
                    {name}
                  </option>
                ))}
            </select>
            <select
              value={disciplinaSelecionada4}
              onChange={(event) =>
                setDisciplinaSelecionada4(event.target.value)
              }
            >
              {disciplinas &&
                disciplinas.discipline.map(({ _id, name }) => (
                  <option key={_id} value={_id}>
                    {name}
                  </option>
                ))}
            </select>
            <select
              value={disciplinaSelecionada5}
              onChange={(event) =>
                setDisciplinaSelecionada5(event.target.value)
              }
            >
              {disciplinas &&
                disciplinas.discipline.map(({ _id, name }) => (
                  <option key={_id} value={_id}>
                    {name}
                  </option>
                ))}
            </select>
            <select
              value={disciplinaSelecionada6}
              onChange={(event) =>
                setDisciplinaSelecionada6(event.target.value)
              }
            >
              {disciplinas &&
                disciplinas.discipline.map(({ _id, name }) => (
                  <option key={_id} value={_id}>
                    {name}
                  </option>
                ))}
            </select>
          </SectionSelect>
          <DivBtn>
            <button type="submit">Salvar</button>
          </DivBtn>
        </Form>
      </DivVoltar>
    </div>
  );
};

export default MatriculaAluno;
