import styled from 'styled-components';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;

export const DivGeral = styled.div`
  background: #dcdcdc;
  width: 100%;
  height: 100vh;
  padding-top: 0.5px;

  form {
    width: 500px;
    height: 380px;
    background: #ffff;
    margin-left: 380px;
    margin-top: 30px;
    z-index: 10;
    position: absolute;
    border-radius: 4px;

    @media (max-width: 768px) {
      width: 350px;
      margin-left: 150px;
    }

    @media (max-width: 600px) {
      margin-left: 70px;
      width: 320px;
      height: 340px;
    }

    section {
      display: flex;
      justify-content: center;

      li {
        margin: 30px;
      }
    }
    div {
      display: grid;
      justify-content: center;
      gap: 10px;

      label {
        margin-left: 5px;
        font-family: 'Nunito', sans-serif;

        @media (max-width: 768px) {
          margin-left: 20px;
        }

        @media (max-width: 600px) {
          font-size: 13px;
          margin-left: 27px;
        }
      }
      input {
        width: 270px;
        height: 30px;
        border-radius: 4px;

        @media (max-width: 768px) {
          margin: 0 auto;
        }

        @media (max-width: 600px) {
          width: 250px;
        }
      }
      button {
        margin: 20px 55px;
        width: 200px;
        height: 34px;
        border-radius: 4px;
        background: #fff;
        font-family: 'Nunito', sans-serif;
      }

      span {
        font-size: 13px;
        color: red;
      }
    }
  }
`;

export const DivSenha = styled.div`
  margin: -3px 25px;
  margin-right: 32px;
  justify-self: self-end;
  font-size: 14px;
  color: #6959cd;
  font-family: 'Nunito', sans-serif;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Titulo = styled.h1`
  margin-left: 530px;
  margin-top: 30px;
  color: #6959cd;
  font-family: 'Nunito', sans-serif;

  @media (max-width: 768px) {
    margin-left: 250px;
    font-size: 28px;
  }

  @media (max-width: 600px) {
    margin-left: 180px;
    font-size: 23px;
  }
`;

export const Image = styled.div`
  margin-left: 818px;
  margin-top: 249px;
  position: absolute;

  @media (max-width: 768px) {
    margin-left: 440px;
    margin-top: 326px;
  }

  @media (max-width: 600px) {
    margin-left: 140px;
    margin-top: 385px;
  }

  img {
    max-height: 290px;

    @media (max-width: 768px) {
      max-height: 200px;
    }

    @media (max-width: 600px) {
      max-height: 150px;
    }
  }
`;

export const BotaoCarregando = styled.button`
  font-size: 16px;
  color: #6959cd;
  font-family: 'Nunito', sans-serif;
`;
