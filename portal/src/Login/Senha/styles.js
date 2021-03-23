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
  section {
    display: flex;
    justify-content: center;
    li {
      margin: 20px;
    }
  }
  div {
    display: grid;
    justify-content: center;
    label {
      justify-self: self-start;
      padding-left: 8px;
      font-size: 14px;
    }
    input {
      width: 300px;
      height: 38px;
      border-radius: 4px;
      border: groove;
      margin: 5px;
    }
    button {
      width: 300px;
      height: 38px;
      margin: 10px;
      border-radius: 4px;
      border: groove;
      background: #fff;
      color: #6959cd;
      font-weight: bold;
    }
  }
`;

export const Imagem = styled.div`
  justify-self: self-end;
  margin-top: -180px;
  img {
    max-height: 310px;
  }
`;
