import "./App.css";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Button from "@mui/material/Button";
import Header from "./components/header";
import Bookmarks from "./components/bookmarks";
import ShowGoogle from "./components/google";
import ShowReddit from "./components/reddit";
import Footer from "./components/footer";
import { Typography, Card } from "@mui/material";
import useLocalStorage from "use-local-storage";
import { RedditEnable, GoogleEnable, NavEnable, FooterEnable } from "./config";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
    text: {
      primary: "#222222",
      footer: "#ffffff",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
      footer: "#ffffff",
    },
  },
});

function App() {
  const [light, setLight] = useLocalStorage(
    "theme",
    themeLight ? themeDark : themeLight
  );
  const date = new Date();
  const hour = date.getHours();
  return (
    <React.Fragment>
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <GlobalStyles
          styles={{
            ul: { margin: 0, padding: 0, listStyle: "none" },
          }}
        />
        <CssBaseline />
        {NavEnable ? <Header /> : ""}
        <Card>
          <Typography
            align="center"
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            Good{" "}
            {(hour < 12 && "Morning") ||
              (hour < 18 && "Afternoon") ||
              "Evening"}
          </Typography>
          <Typography
            align="center"
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          >
            {date.toLocaleDateString()}
          </Typography>
        </Card>
        <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button>
        {GoogleEnable ? <ShowGoogle /> : ""}
        {RedditEnable ? <ShowReddit /> : ""}
        <Bookmarks />
        {FooterEnable ? <Footer /> : ""}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
