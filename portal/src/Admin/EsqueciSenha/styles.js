import styled from 'styled-components';

export const DivGeral = styled.div`
  width: 100%;
  height: 100vh;
  background: #dcdcdc;
  display: grid;
`;

export const Titulo = styled.h1`
  color: #6a5acd;
  font-size: 25px;
  margin-top: 30px;
  text-align: center;
`;

export const DivForm = styled.div`
  width: 550px;
  height: 420px;
  background: #fff;
  margin: 0 auto;
  margin-top: 30px;
  z-index: 100;
  form {
    height: 330px;
    display: grid;
    justify-content: center;
    margin-top: 18px;
    label {
      width: 80px;
      height: 0px;
      font-size: 15px;
    }
    input {
      width: 300px;
      height: 30px;
      border-radius: 4px;
    }
    span {
      font-size: 12px;
      color: red;
    }
    p {
      font-size: 14px;
      color: #2ecc71;
      font-weight: bold;
    }
    button {
      width: 310px;
      height: 35px;
      border-radius: 4px;
      margin-top: 10px;
      color: #6a5acd;
      background: #fff;
      justify-self: center;
    }
  }
`;

export const DivVoltar = styled.div`
  margin: 20px;
  p {
    text-decoration: none;
    color: #6a5acd;
  }
`;

export const Image = styled.div`
  justify-self: self-end;
  position: relative;
  margin-top: -203px;
  img {
    max-height: 320px;
    max-width: 500px;
  }
`;
