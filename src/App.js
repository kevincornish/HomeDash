import "./App.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{
          bgcolor: "rgb(0, 30, 60)",
          ul: { margin: 0, padding: 0, listStyle: "none" },
        }}
      />
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography>HomeDash</Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
