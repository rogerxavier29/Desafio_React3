import styled from 'styled-components';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;

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
  font-family: 'Nunito', sans-serif;
`;

export const Form = styled.form`
  width: 500px;
  height: 380px;
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
      font-family: 'Nunito', sans-serif;
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
    span {
      font-size: 13px;
      color: red;
      margin-left: 5px;
      font-family: 'Nunito', sans-serif;
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
