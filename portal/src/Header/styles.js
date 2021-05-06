import styled from 'styled-components';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;

export const Cabeçalho = styled.header`
  width: 100%;
  height: 60px;
  background: #6959cd;
  ul {
    display: flex;
    justify-content: space-between;
    position: relative;
    ul {
      display: none;
      position: absolute;
      background: #6959cd;
      li {
        display: block;
        background: #6959cd;
      }
    }
  }
  ul li:hover ul {
    display: grid;
    cursor: pointer;
    margin-top: 10px;
    width: 120px;
    height: 65px;
    text-align: center;
  }
`;

export const LiNome = styled.li`
  padding: 20px;
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  font-family: 'Nunito', sans-serif;
`;

export const LiImg = styled.li`
  color: #fff;
  font-size: 19px;

  li {
    margin: 0 auto;
    font-family: 'Nunito', sans-serif;
    color: #fff;
    a {
      color: #fff;
      font-family: 'Nunito', sans-serif;
    }
  }
  img {
    max-height: 30px;
    margin-top: 15px;
    margin-right: 80px;
    cursor: pointer;
  }
`;

export const BotaoFechar = styled.button`
  justify-items: center;
`;

export const DivUsuario = styled.div``;

export const DivAdmin = styled.div``;
