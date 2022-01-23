import "./App.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Container, Typography } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{
          ul: { margin: 0, padding: 0, listStyle: "none" },
        }}
      />
      <CssBaseline />
      <Header />
      <Container maxWidth="sm">
        <Typography>HomeDash</Typography>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default App;
