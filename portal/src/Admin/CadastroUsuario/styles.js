import styled from 'styled-components';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;

export const Titulo = styled.h2`
  margin: 20px;
  padding-top: 20px;
  font-family: 'Nunito', sans-serif;
`;

export const Form = styled.form`
  display: grid;
  gap: 20px;
`;

export const BotaoFechar = styled.button``;

export const NomeSobre = styled.div`
  justify-content: center;
  display: flex;
`;

export const InputNome = styled.input`
  margin: 10px;
  width: 200px;
  height: 40px;
`;

export const InputSobre = styled.input`
  margin: 10px;
  width: 200px;
  height: 40px;
`;

export const InputFone = styled.input`
  width: 430px;
  height: 40px;
  margin: 5px;
  justify-self: center;
`;
export const InputEmail = styled.input`
  width: 430px;
  height: 40px;
  margin: 5px;

  justify-self: center;
`;
export const InputUsuario = styled.input`
  width: 430px;
  height: 40px;
  margin: 5px;
  justify-self: center;
`;

export const SelectUsuario = styled.select`
  width: 437px;
  height: 45px;
  justify-self: center;
`;

export const BtnSalvar = styled.button`
  width: 200px;
  height: 35px;
  justify-self: self-end;
  margin: 35px;
`;

export const MensErro = styled.span`
  font-size: 13px;
  color: red;
  margin-left: 25px;
`;

export const MensSucesso = styled.span`
  font-size: 13px;
  color: #2ecc71;
  margin-left: 25px;
`;
