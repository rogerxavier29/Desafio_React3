import styled from 'styled-components';

export const DivGeral = styled.div`
  background: #dcdcdc;
  width: 100%;
  height: 100vh;
  display: grid;
`;

export const Form = styled.form`
  width: 550px;
  height: 310px;
  justify-self: center;
  background: #ffff;
  margin: 20px;
  z-index: 10;
`;

export const SectionForm = styled.section`
  display: grid;
  justify-content: center;
  margin: 30px;
  input {
    width: 300px;
    height: 40px;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  span {
    font-size: 12px;
    color: red;
  }
  button {
    width: 310px;
    height: 40px;
    border-radius: 4px;
    margin-top: 20px;
    color: #6a5acd;
    background: #fff;
  }
`;

export const EsquecSenha = styled.div`
  justify-self: self-end;
  font-size: 13px;
  font-weight: bold;
`;

export const Titulo = styled.h1`
  color: #6a5acd;
  text-align: center;
  padding-top: 40px;
`;

export const Image = styled.div`
  justify-self: self-end;
  margin-top: -180px;
  img {
    max-height: 360px;
  }
`;
export const BotaoCarregando = styled.button`
  font-size: 16px;
  color: #6959cd;
`;
