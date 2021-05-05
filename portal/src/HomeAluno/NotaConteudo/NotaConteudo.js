import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

import {
  DivGeral,
  Linky,
  Titulo,
  SubDiv,
  Section1,
  SubSection1,
  Section2,
  SubSection2,
  SectionNotas,
  SectionProf,
  SectionAluno,
  SectionNotaAluno,
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

  const userType = sessionStorage.getItem('checkbox');

  const idAluno = sessionStorage.getItem('id');

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
          {userType === '2' ? (
            <SectionProf>
              <button>
                <Link to={`/apresentconteudo/${_id}/${name}`}>
                  Cadastro de Conteudo
                </Link>
              </button>

              <SubSection1>
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
                              _id: `${_id}`,
                            },
                          }}
                        >
                          <p key={id}>{title}</p>
                        </Link>
                      </div>
                    ),
                  )}
              </SubSection1>
            </SectionProf>
          ) : (
            <SectionAluno>
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
                            _id: `${_id}`,
                          },
                        }}
                      >
                        <p key={id}>{title}</p>
                      </Link>
                    </div>
                  ),
                )}
            </SectionAluno>
          )}
        </Section1>

        <Section2>
          {userType === '2' ? (
            <SubSection2>
              <button>
                <Link to={`/publicarnotas/${_id}`}>Publicar Notas</Link>
              </button>
              <SectionNotas>
                {disciplina &&
                  disciplina.discipline.notas.map((nota) => (
                    <div>
                      <p>
                        <span>Trabalho:</span>
                        {nota && nota.nomeNota}
                      </p>
                      <p>
                        <span>Peso:</span>
                        {nota && nota.pesoNota}
                      </p>
                    </div>
                  ))}
              </SectionNotas>
            </SubSection2>
          ) : (
            <SectionNotaAluno>
              {disciplina &&
                disciplina.discipline.notas.map((nota) => (
                  <div>
                    <p>
                      <span>Trabalho:</span>
                      {nota && nota.nomeNota}
                    </p>
                    <p>
                      <span>Peso:</span>
                      {nota && nota.pesoNota}
                    </p>
                    <p>
                      {nota.alunos
                        .filter((nota) => nota.idAlunos === idAluno)
                        .map((notas) => (
                          <span key={_id}>Valor Nota: {notas.valorNota}</span>
                        ))}
                    </p>
                  </div>
                ))}
            </SectionNotaAluno>
          )}
        </Section2>
      </SubDiv>
    </DivGeral>
  );
};

export default NotaConteudo;
