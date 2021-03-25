import styled from 'styled-components';

export const DivGeral = styled.div`
  height: 100vh;
  width: 100%;
  background: #fff;
`;

export const Linky = styled.div`
  margin: 25px;
  span {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }
`;

export const Titulo = styled.h1`
  margin: 25px;
  font-size: 25px;
`;

export const SubDiv = styled.div`
  display: grid;
  justify-content: center;
  margin: 25px;
  gap: 20px;
`;

export const Section1 = styled.section`
  width: 1050px;
  height: 180px;
  border-style: groove;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  div {
    width: 130px;
    height: 130px;
    border-style: groove;
    border-radius: 6px;
    p {
      margin: 20px;
      font-size: 18px;
    }
  }
`;

export const Section2 = styled.section`
  width: 1050px;
  height: 180px;
  border-style: groove;
  display: flex;
  justify-content: space-around;
  div {
    width: 100px;
    height: 100px;
    border-style: groove;
    border-radius: 3px;
    margin: 20px;
    background: #dcdcdc;
  }
`;
