import { Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Container maxWidth="100" style={{ background: "#2E3B55" }}>
      <Typography variant="body2" color="white" align="center">
        HomeDash {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}
export default Footer;
