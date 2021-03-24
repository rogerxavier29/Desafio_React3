import styled from 'styled-components';

export const Cabeçalho = styled.header`
  width: 100%;
  height: 60px;
  background: #6959cd;
  display: flex;
  justify-content: space-between;
  p {
    padding: 20px;
    color: #fff;
    font-weight: bold;
    font-size: 17px;
  }
  img {
    max-height: 40px;
    margin: 15px;
    cursor: pointer;
  }
`;
