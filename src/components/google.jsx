import { Container, TextField } from "@mui/material";

function ShowGoogle() {
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
