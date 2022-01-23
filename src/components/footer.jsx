import { Container, Typography } from "@mui/material";
import { FooterEnable } from "../config";

function Footer() {
  if (!FooterEnable) return null;
  return (
    <Container maxWidth="100" style={{ background: "#2E3B55" }}>
      <Typography variant="body2" color="text.footer" align="center">
        HomeDash {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
}
export default Footer;
