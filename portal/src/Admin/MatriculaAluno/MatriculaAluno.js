import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

import { DivVoltar, Form, SectionSelect, DivBtn } from './styles';
import axios from 'axios';

const MatriculaAluno = () => {
  const [disciplinas, setDisciplinas] = useState();

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
  return (
    <div>
      <Header />
      <DivVoltar>
        <Link to="/homeadmin">Voltar</Link>
        <Form onSubmit="">
          <input type="text" placeholder="N° de matrícula aluno" />
          <SectionSelect>
            <select>
              <option disabled selected>
                Disciplinas
              </option>
              <option></option>
            </select>
            <select>
              <option disabled selected>
                Disciplinas
              </option>
              <option value=""></option>
            </select>
            <select>
              <option disabled selected>
                Disciplinas
              </option>
              <option value=""></option>
            </select>
            <select>
              <option disabled selected>
                Disciplinas
              </option>
              <option value=""></option>
            </select>
            <select>
              <option disabled selected>
                Disciplinas
              </option>
              <option value=""></option>
            </select>
            <select>
              <option disabled selected>
                Disciplinas
              </option>
              <option value=""></option>
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
