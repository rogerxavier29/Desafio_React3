import styled from 'styled-components';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;

export const Titulo = styled.h1`
  font-size: 23px;
  margin-top: 20px;
  font-family: 'Nunito', sans-serif;
`;

export const Form = styled.form`
  display: grid;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;
  input {
    width: 350px;
    height: 35px;
  }
`;

export const BtnSalvar = styled.button`
  width: 200px;
  height: 30px;
  border-radius: 8px;
  background: #fff;
  color: #0e4da4;
  justify-self: self-end;
`;
