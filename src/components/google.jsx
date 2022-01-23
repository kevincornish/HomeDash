import { Container, TextField } from "@mui/material";
import { GoogleEnable } from "../config";

function ShowGoogle() {
  if (!GoogleEnable) return null;
  return (
    <Container maxWidth="sm">
      <form action="https://www.google.com/search?q=" method="get">
        <TextField
          id="outlined-basic"
          label="Google Search"
          variant="outlined"
          margin="dense"
          name="q"
          fullWidth
          autoComplete="off"
        />
      </form>
    </Container>
  );
}

export default ShowGoogle;
