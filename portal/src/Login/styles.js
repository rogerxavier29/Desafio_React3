import styled from 'styled-components';

export const DivGeral = styled.div`
  background: silver;
  width: 100%;
  height: 100vh;
  padding-top: 0.5px;
  form {
    width: 500px;
    height: 320px;
    background: #ffff;
    margin-left: 380px;
    margin-top: 30px;
    z-index: 10;
    position: absolute;
    input {
      width: 250px;
      height: 30px;
      margin-left: 130px;
      margin-top: 40px;
      border-radius: 3px;
    }
  }
`;

export const CheckBoxs = styled.ul`
  display: flex;
  justify-content: center;
  li {
    margin-left: -100px;
    input {
      width: 20px;
      margin-top: 20px;
    }
  }
`;

export const LinkSenha = styled.section`
  margin-top: 7px;
  margin-left: 300px;
  font-size: 13px;
  color: #6959cd;
`;

export const BtnEntrar = styled.button`
  width: 200px;
  height: 40px;
  margin-left: 160px;
  margin-top: 20px;
  border-radius: 7px;
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
