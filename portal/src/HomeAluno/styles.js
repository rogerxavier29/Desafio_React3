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

export const Titulo = styled.h1`
  margin: 30px;
  font-family: 'Nunito', sans-serif;
`;

export const Section1 = styled.section`
  width: 900px;
  height: 400px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 10px;
  div {
    width: 230px;
    height: 70px;
    border-radius: 3px;
    background: #dcdcdc;
    cursor: pointer;
    p {
      margin: 10px;
      font-size: 18px;
      padding-top: 5px;
      font-style: none;
      text-decoration: none;
      color: black;
      font-family: 'Nunito', sans-serif;
    }
    span {
      margin: 10px;
      color: gray;
      text-transform: uppercase;
      font-size: 12px;
      font-family: 'Nunito', sans-serif;
    }
  }
`;
