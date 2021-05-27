import styled from 'styled-components';

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap');
</style>;

export const DivGeral = styled.div`
  width: 100%;
  height: 100vh;
  background: #dcdcdc;
  display: grid;
`;

export const Titulo = styled.h1`
  color: #6a5acd;
  font-size: 25px;
  margin-top: 30px;
  text-align: center;
  font-family: 'Nunito', sans-serif;

  @media (max-width: 768px) {
    font-size: 23px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const DivForm = styled.div`
  width: 550px;
  height: 420px;
  background: #fff;
  margin: 0 auto;
  margin-top: 30px;
  z-index: 100;
  border-radius: 4px;

  @media (max-width: 768px) {
    width: 450px;
    height: 380px;
  }

  @media (max-width: 600px) {
    width: 360px;
    height: 340px;
  }

  form {
    height: 330px;
    display: grid;
    justify-content: center;
    margin-top: 18px;

    @media (max-width: 768px) {
      height: 300px;
    }

    @media (max-width: 600px) {
      height: 270px;
    }

    label {
      width: 85px;
      height: 0px;
      font-size: 15px;
      font-family: 'Nunito', sans-serif;

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }

    input {
      width: 300px;
      height: 30px;
      border-radius: 4px;

      @media (max-width: 768px) {
        width: 280px;
        height: 28px;
      }

      @media (max-width: 600px) {
        width: 260px;
        height: 26px;
      }
    }

    span {
      font-size: 12px;
      color: red;
      font-family: 'Nunito', sans-serif;
    }

    p {
      font-size: 14px;
      color: #2ecc71;
      font-weight: bold;
      font-family: 'Nunito', sans-serif;
    }

    button {
      width: 310px;
      height: 35px;
      border-radius: 4px;
      margin-top: 10px;
      color: #6a5acd;
      background: #fff;
      justify-self: center;

      @media (max-width: 768px) {
        width: 280px;
        height: 34px;
      }
      @media (max-width: 600px) {
        width: 260px;
        height: 33px;
      }
    }
  }
`;

export const DivVoltar = styled.div`
  margin: 20px;

  p {
    text-decoration: none;
    color: #6a5acd;
    font-family: 'Nunito', sans-serif;
    font-size: 17px;

    @media (max-width: 768px) {
      font-size: 15px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const Image = styled.div`
  justify-self: self-end;
  position: relative;
  margin-top: -203px;

  @media (max-width: 768px) {
    margin-top: -104px;
  }

  @media (max-width: 600px) {
    margin-top: -42px;
    justify-self: center;
  }

  img {
    max-height: 295px;

    @media (max-width: 768px) {
      max-height: 220px;
    }

    @media (max-width: 600px) {
      max-height: 200px;
    }
  }
`;
