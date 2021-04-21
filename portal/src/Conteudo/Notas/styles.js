import styled from 'styled-components';

export const DivGeral = styled.div`
  height: 100vh;
  width: 100%;
  background: #fff;
`;

export const LinkVoltar = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: grid;
  margin: 0 auto;
  width: 620px;
`;

export const DivTrabalho = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const Tabela = styled.table`
  margin-top: 30px;

  thead {
    display: flex;
    justify-content: space-between;
  }
  tr {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: groove;
    input {
      width: 20px;
    }
  }
`;

export const Botao = styled.button`
  margin-top: 30px;
  width: 100px;
  height: 30px;
  justify-self: self-end;
`;
