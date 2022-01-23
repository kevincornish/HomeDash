import { Typography } from "@mui/material";

function Footer() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      Kevin Cornish {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
export default Footer;
