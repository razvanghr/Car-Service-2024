import styled from "styled-components";

export const ClientPageStyled = styled.div`
  width: 100%;
  height: 120vh;

  .form-container {
    display: flex;
    align-items: flex-start;
    margin: 50px 0px;
  }

  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  .td-actions {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`;
