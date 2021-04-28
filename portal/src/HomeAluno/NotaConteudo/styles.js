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
  padding-top: 10px;
  overflow-x: auto;
`;

export const SectionProf = styled.section`
  display: grid;
  button {
    width: 300px;
    height: 30px;
    justify-self: center;
    text-align: center;
    background: #fff;
    border-radius: 5px;
  }
`;

export const SubSection1 = styled.section`
  display: flex;
  margin: 0 auto;
  overflow-x: auto;
  overflow-y: auto;
  max-width: 850px;
  div {
    width: 200px;
    height: 95px;
    border-style: groove;
    border-radius: 6px;
    cursor: pointer;
    margin: 10px;
    padding: 5px;
    background: #98fb98;
    p {
      margin: 20px;
      font-size: 18px;
      color: #fff;
    }
  }
`;

export const SectionAluno = styled.section`
  display: flex;
  margin: 0 auto;
  div {
    width: 150px;
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
`;

export const SubSection2 = styled.section`
  display: grid;
  padding-top: 10px;
  button {
    width: 300px;
    height: 30px;
    justify-self: center;
    text-align: center;
    background: #fff;
    border-radius: 5px;
  }
`;

export const SectionNotas = styled.section`
  display: flex;
  overflow-x: auto;
  overflow-y: auto;
  max-width: 900px;
  div {
    width: 200px;
    height: 80px;
    background: #f0f0f0;
    margin: 10px;
    padding: 10px;
    display: grid;
    border-radius: 4px;
    font-size: 14px;
    span {
      font-weight: bold;
    }
  }
`;

export const SectionNotaAluno = styled.section`
  display: flex;
  overflow-x: auto;
  overflow-y: auto;
  max-width: 950px;
  margin: 0 auto;
  margin-top: 20px;
  div {
    width: 200px;
    height: 80px;
    background: #f0f0f0;
    margin: 10px;
    padding: 10px;
    display: grid;
    gap: 10px;
    border-radius: 4px;
    font-size: 14px;
    span {
      font-weight: bold;
    }
  }
`;
