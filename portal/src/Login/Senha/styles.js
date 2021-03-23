import styled from 'styled-components';

export const DivGeral = styled.div`
  width: 100%;
  height: 100vh;
  background: #dcdcdc;
  display: grid;
`;

export const Titulo = styled.h1`
  display: grid;
  justify-content: center;
  color: #6959cd;
  padding: 40px;
`;

export const Form = styled.form`
  width: 500px;
  height: 360px;
  background: #fff;
  justify-self: center;
  z-index: 10;
`;

export const Imagem = styled.div`
  justify-self: self-end;
  margin-top: -180px;
  img {
    max-height: 310px;
  }
`;
