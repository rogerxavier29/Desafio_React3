import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

import { DivVoltar, Form, SectionSelect, DivBtn } from './styles';
import axios from 'axios';

const MatriculaAluno = () => {
  const [disciplinas, setDisciplinas] = useState();
  const [cpf, setCpf] = useState('');
  const [erroCpf, setErroCpf] = useState(null);
  const [disciplinaSelecionada, setDisciplinaSelecionada] = useState({});
  const [disciplinaSelecionada2, setDisciplinaSelecionada2] = useState({});
  const [disciplinaSelecionada3, setDisciplinaSelecionada3] = useState({});
  const [disciplinaSelecionada4, setDisciplinaSelecionada4] = useState({});
  const [disciplinaSelecionada5, setDisciplinaSelecionada5] = useState({});
  const [disciplinaSelecionada6, setDisciplinaSelecionada6] = useState({});
  const [erro, setErro] = useState(null);
  const [matrSucesso, setMatrSucesso] = useState(null);

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

  function validarCPF(cpf) {
    if (cpf.length === 0) {
      setCpf('Preencha um valor');
      return false;
    } else if (!/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/g.test(cpf)) {
      setErroCpf('Preencha CPF válido');
      return false;
    } else {
      setErroCpf(null);
      return true;
    }
  }

  function handleBlurCPF({ target }) {
    validarCPF(target.value);
  }

  function handleChangeCPF({ target }) {
    if (erroCpf) validarCPF(target.value);
    setCpf(target.value);
  }

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

    if (validarCPF(cpf)) {
      axios
        .post(
          `https://projetoportal.herokuapp.com/registration/` + cpf,
          dataDisciplinas,
          options,
        )
        .then(function (response) {
          if (response.data.user.cpf) {
            setMatrSucesso('Cadastro Efetuado com sucesso!');
          }
        })
        .catch(function (erro) {
          setErro('CPF já matriculado!');
        });
    }
  }

  return (
    <div>
      <Header />
      <DivVoltar>
        <Link to="/homeadmin">Voltar</Link>
        <Form onSubmit={handleSubmit}>
          <input
            value={cpf}
            onChange={handleChangeCPF}
            onBlur={handleBlurCPF}
            type="text"
            placeholder="N° de matrícula aluno (CPF)"
            required
          />
          {erroCpf && <span>{erroCpf}</span>}

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
          {erro && <sub>{erro}</sub>}
          {matrSucesso && <p>{matrSucesso}</p>}
          <DivBtn>
            <button type="submit">Salvar</button>
          </DivBtn>
        </Form>
      </DivVoltar>
    </div>
  );
};

export default MatriculaAluno;
