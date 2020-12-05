import palette from "src/utils/palette";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80vh;
`;

export const StyledConfirmPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  p {
    font-weight: bold;
    margin: 5px 0;
  }

  .password {
    margin-top: 10px;
    width: 100%;
  }

  .button {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    border-radius: 50px;
  }

  .modify-password {
    margin-top: 20px;
    color: ${palette.primary};
    text-decoration: none;
  }
`;

export const StyeldModifyUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 500px;
  height: 450px;

  .input {
    width: 100%;
  }

  .email {
    width: 100%;
    display: flex;
    align-items: center;

    .input {
      width: 200px;
    }

    .select {
      width: 200px;
      margin-left: 10px;
    }

    span {
      margin: 0 10px;
    }
  }

  .button {
    width: 100%;
    height: 40px;
    border-radius: 50px;
  }
`;

export const StyeldModifyPassword = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  .password {
    margin-top: 20px;
    width: 100%;
  }

  .button {
    margin-top: 20px;
    width: 100%;
    height: 40px;
    border-radius: 50px;
  }
`;
