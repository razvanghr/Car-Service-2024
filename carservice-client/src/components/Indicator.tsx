import { StyledIndicator } from "../styles/Indicator.styled";

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
