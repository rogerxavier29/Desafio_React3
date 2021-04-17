import styled from 'styled-components';

export const DivGeral = styled.div`
  height: 100vh;
  width: 100%;
  background: #fff;
`;

export const Titulo = styled.h1`
  margin: 30px;
`;

export const Section1 = styled.section`
  width: 500px;
  height: 260px;
  display: flex;
  justify-content: space-between;
  div {
    width: 250px;
    height: 70px;
    margin: 15px;
    border-radius: 3px;
    background: #dcdcdc;
    cursor: pointer;
    p {
      margin: 10px;
      font-size: 15px;
    }
    span {
      margin: 10px;
      color: gray;
      text-transform: uppercase;
      font-size: 14px;
    }
  }
`;
