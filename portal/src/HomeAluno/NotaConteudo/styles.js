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
  cursor: pointer;
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
  border-style: solid;
  border-color: #6495ed;
  border-radius: 3px;
  display: grid;
  padding-top: 20px;
  button {
    width: 300px;
    height: 30px;
    justify-self: center;
    text-align: center;
  }
`;

export const SubSection = styled.section`
  display: flex;
  justify-self: self-start;
  div {
    width: 130px;
    height: 100px;
    border-style: groove;
    border-radius: 6px;
    cursor: pointer;
    margin-left: 10px;
    p {
      margin: 20px;
      font-size: 18px;
    }
  }
`;

export const Section2 = styled.section`
  width: 1050px;
  height: 180px;
  border-style: solid;
  border-color: #6495ed;
  border-radius: 3px;
  display: flex;
  justify-content: space-around;
  div {
    width: 105px;
    height: 95px;
    border-style: groove;
    border-radius: 6px;
    margin: 20px;
    background: #dcdcdc;
    cursor: pointer;
    p {
      margin: 5px;
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

export const SubSection2 = styled.section`
  display: grid;
  padding-top: 20px;
  button {
    width: 300px;
    height: 30px;
    justify-self: center;
    text-align: center;
  }
`;
