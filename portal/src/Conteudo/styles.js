import styled from 'styled-components';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;

export const DivGeral = styled.div`
  height: 100vh;
  width: 100%;
  background: #fff;
`;

export const SubGeral = styled.section`
  margin: 50px;
`;

export const Linky = styled.div`
  margin: 25px;
  span {
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-family: 'Nunito', sans-serif;
  }
`;

export const Titulo = styled.h1`
  margin: 25px;
  font-size: 25px;
  cursor: pointer;
  font-family: 'Nunito', sans-serif;
`;

export const SectionForm = styled.section`
  margin: 30px;
`;

export const Form = styled.form`
  display: grid;
  width: 900px;
  input {
    width: 300px;
    height: 20px;
    margin-bottom: 30px;
  }
  textarea {
    width: 900px;
    height: 200px;
    margin-bottom: 20px;
  }
  button {
    width: 200px;
    height: 35px;
    justify-self: self-end;
    border-radius: 8px;
  }
`;
