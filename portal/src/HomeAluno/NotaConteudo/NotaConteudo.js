import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

import {
  DivGeral,
  Linky,
  Titulo,
  SubDiv,
  Section1,
  SubSection,
  Section2,
  SubSection2,
} from './styles';
import axios from 'axios';

const NotaConteudo = (props) => {
  const [disciplina, setDisciplina] = useState();

  const token = sessionStorage.getItem('token');

  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const _id = props.match.params._id;

  const name = props.match.params.name;

  useEffect(() => {
    getdisciplina();
  }, []);
  const getdisciplina = async () => {
    axios
      .get(`https://projetoportal.herokuapp.com/content/${_id}`, options)
      .then((res) => {
        console.log(res.data);
        setDisciplina(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <DivGeral>
      <Header />
      <Linky>
        <Link to="/homealuno">
          <span>Voltar</span>
        </Link>
      </Linky>
      <Titulo>{name} - Turma 345</Titulo>
      <SubDiv>
        <Section1>
          <button>
            <Link to={`/apresentconteudo/${_id}/${name}`}>
              Cadastro de Conteudo
            </Link>
          </button>
          <SubSection>
            {disciplina &&
              disciplina.discipline.contents.map(
                ({ id, title, description }) => (
                  <div>
                    <Link
                      to={{
                        pathname: `/visualizarconteudo/${name}`,
                        state: {
                          titulo: `${title}`,
                          description: `${description}`,
                          id: `${id}`,
                        },
                      }}
                    >
                      <p key={id}>{title}</p>
                    </Link>
                  </div>
                ),
              )}
          </SubSection>
        </Section1>

        <Section2>
          <SubSection2>
            <button>
              <Link to={`/publicarnotas/${_id}`}>Publicar Notas</Link>
            </button>
            <div>
              <p>Trabalho 1</p>
              <p>Peso 2.0</p>
              <p>Nota 10</p>
            </div>
          </SubSection2>
        </Section2>
      </SubDiv>
    </DivGeral>
  );
};

export default NotaConteudo;
