import { StyledFooter } from "../styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <a
        style={{
          color: "black",
          textDecoration: "none",
          textAlign: "center",
          width: "100%",
        }}
        href="https://github.com/razvanghr"
      >
        Razvan Ghilea©2024
      </a>
    </StyledFooter>
  );
};

export default Footer;
