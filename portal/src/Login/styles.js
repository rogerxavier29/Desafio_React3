import styled from 'styled-components';

export const DivGeral = styled.div`
  background: #dcdcdc;
  width: 100%;
  height: 100vh;
  padding-top: 0.5px;
  form {
    width: 500px;
    height: 380px;
    background: #ffff;
    margin-left: 380px;
    margin-top: 30px;
    z-index: 10;
    position: absolute;
    section {
      display: flex;
      justify-content: center;
      li {
        margin: 30px;
      }
    }
    div {
      display: grid;
      justify-content: center;
      gap: 10px;
      label {
        margin-left: 5px;
      }
      input {
        width: 270px;
        height: 30px;
        border-radius: 4px;
      }
      button {
        margin: 20px 55px;
        width: 200px;
        height: 34px;
        border-radius: 4px;
      }
      span {
        font-size: 13px;
        color: red;
      }
    }
  }
`;

export const DivSenha = styled.div`
  margin: -3px 25px;
  margin-right: 32px;
  justify-self: self-end;
  font-size: 14px;
  color: #6959cd;
`;

export const Titulo = styled.h1`
  margin-left: 530px;
  margin-top: 30px;
  color: #6959cd;
`;

export const Image = styled.div`
  margin-left: 790px;
  margin-top: 228px;
  position: absolute;
  img {
    max-height: 310px;
  }
`;

export const BotaoCarregando = styled.button`
  font-size: 16px;
  color: #6959cd;
`;
