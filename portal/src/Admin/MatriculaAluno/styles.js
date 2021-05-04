import styled from 'styled-components';

export const DivVoltar = styled.div`
  margin: 40px;
  font-size: 20px;
  color: black;
`;

export const Form = styled.form`
  margin: 0 auto;
  margin-top: 40px;
  display: grid;
  input {
    width: 350px;
    height: 35px;
  }
  span {
    margin: 10px;
    font-size: 13px;
    color: red;
  }
  sub {
    margin: 5px;
    font-size: 14px;
    font-weight: bold;
    color: red;
    justify-self: center;
  }
  p {
    margin: 5px;
    font-size: 14px;
    font-weight: bold;
    color: #2ecc71;
    justify-self: center;
  }
`;

export const SectionSelect = styled.section`
  margin-top: 50px;
  width: 900px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  select {
    width: 360px;
    height: 40px;
  }
`;

export const DivBtn = styled.div`
  width: 900px;
  display: flex;
  justify-content: flex-end;
  button {
    width: 200px;
    height: 35px;
    border-radius: 8px;
    outline: none;
    background: #fff;

    color: #0e4da4;
  }
`;
