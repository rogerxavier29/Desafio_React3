import styled from 'styled-components';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;

export const DivGeral = styled.div`
  background: #dcdcdc;
  width: 100%;
  height: 100vh;
  display: grid;
`;

export const Titulo = styled.h3`
  color: #6a5acd;
  text-align: center;
  padding-top: 30px;
  font-size: 32px;
  font-family: 'Nunito', sans-serif;

  @media (max-width: 768px) {
    font-size: 25px;
    margin-top: 20px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const Form = styled.form`
  width: 550px;
  height: 350px;
  justify-self: center;
  background: #ffff;
  z-index: 10;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 400px;
    height: 280px;
    margin-top: -150px;
  }

  @media (max-width: 600px) {
    width: 290px;
    height: 280px;
  }
`;

export const SectionForm = styled.section`
  display: grid;
  justify-content: center;
  margin: 50px;
  input {
    width: 300px;
    height: 40px;
    border-radius: 4px;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      width: 250px;
      height: 28px;
    }

    @media (max-width: 600px) {
      width: 230px;
    }
  }
  span {
    font-size: 12px;
    color: red;
    font-family: 'Nunito', sans-serif;
  }
  button {
    width: 310px;
    height: 40px;
    border-radius: 4px;
    margin-top: 20px;
    color: #6a5acd;
    background: #fff;

    @media (max-width: 768px) {
      width: 250px;
      height: 30px;
      margin-top: 20px;
    }

    @media (max-width: 600px) {
      width: 230px;
    }
  }
`;

export const EsquecSenha = styled.div`
  justify-self: self-end;
  font-size: 13px;
  font-weight: bold;
  font-family: 'Nunito', sans-serif;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

export const Image = styled.div`
  justify-items: end;
  margin-left: 75%;
  position: absolute;
  margin-top: 345px;

  @media (max-width: 768px) {
    margin-top: 344px;
    margin-left: 473px;
  }

  @media (max-width: 600px) {
    margin-top: 384px;
    margin-left: 127px;
  }

  img {
    max-height: 260px;

    @media (max-width: 768px) {
      max-height: 240px;
    }

    @media (max-width: 600px) {
      max-height: 200px;
    }
  }
`;
export const BotaoCarregando = styled.button`
  font-size: 16px;
  color: #6959cd;
`;
