import React from "react";
import styled from "styled-components";

const StyledIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #3a4d39;
  }
`;

type TIndicatorProps = {
  indicatorNumber: number;
  indicatorTitle: string;
};

const Indicator = ({ indicatorNumber, indicatorTitle }: TIndicatorProps) => {
  return (
    <StyledIndicator>
      <p>{indicatorTitle}</p>
      <h1>{indicatorNumber}</h1>
    </StyledIndicator>
  );
};

export default Indicator;
