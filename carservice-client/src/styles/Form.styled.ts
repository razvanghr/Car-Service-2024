import styled from "styled-components";

export const FormStyled = styled.form`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  gap: 10px;

  input {
    font-size: 1.1rem;
    outline: 0;
    border-radius: 10px;
    border: 2px solid #3a4d39;
    text-align: center;
  }

  .form-control {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  select {
    border: 2px solid #3a4d39;
    border-radius: 5px;
  }
`;
