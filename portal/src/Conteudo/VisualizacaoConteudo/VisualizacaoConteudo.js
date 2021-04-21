import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';

import {
  DivGeral,
  TituloDisc,
  TituloCont,
  LinkVoltar,
  SectionConteudo,
  DivDescricao,
} from './styles';

const VisualizacaoConteudo = (props) => {
  const name = props.match.params.name;

  const title = props.location.state.titulo;

  const description = props.location.state.description;

  return (
    <DivGeral>
      <Header />
      <LinkVoltar>
        <Link to="/notaconteudo">Voltar</Link>
      </LinkVoltar>
      <TituloDisc>{name} - Turma 345</TituloDisc>
      <SectionConteudo>
        <TituloCont>{title}</TituloCont>
        <DivDescricao>{description}</DivDescricao>
      </SectionConteudo>
    </DivGeral>
  );
};

export default VisualizacaoConteudo;
