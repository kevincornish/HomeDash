import "./App.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Header from "./components/header";
import Bookmarks from "./components/bookmarks";
import ShowReddit from "./components/reddit";
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
      <ShowReddit />
      <Bookmarks />
      <Footer />
    </React.Fragment>
  );
}

export default App;
