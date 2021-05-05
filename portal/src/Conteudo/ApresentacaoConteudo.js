import React, { useState } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

import { DivGeral, Linky, Titulo, SectionForm, Form, SubGeral } from './styles';
import axios from 'axios';

const ApresentacaoConteudo = (props) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const name = props.match.params.name;

  const _id = props.match.params._id;

  const token = sessionStorage.getItem('token');

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = {
    title: titulo,
    description: descricao,
  };

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(`https://projetoportal.herokuapp.com/content/${_id}`, data, options)
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
      <SubGeral>
        <Linky>
          <Link to={`/notaconteudo/${_id}/${name}`}>
            <span>Voltar</span>
          </Link>
        </Linky>
        <Titulo>{name} - Turma 345</Titulo>
        <SectionForm>
          <Form onSubmit={handleSubmit}>
            <h3>Titulo</h3>
            <input
              type="text"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
            />
            <h2>Descricao</h2>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
            ></textarea>
            <button type="submit">Salvar</button>
          </Form>
        </SectionForm>
      </SubGeral>
    </DivGeral>
  );
};

export default ApresentacaoConteudo;
