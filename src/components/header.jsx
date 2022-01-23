import { Typography, Link } from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { NavBar, NavEnable } from "../config";

function Header() {
  if (!NavEnable) return null;
  return (
    <AppBar
      position="static"
      style={{ background: "#2E3B55" }}
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          HomeDash
        </Typography>
        <nav>
          {NavBar.map((data, key) => {
            return (
              <Link
                variant="button"
                color="text.primary"
                href={data.url}
                sx={{ my: 1, mx: 1.5 }}
              >
                {data.name}
              </Link>
            );
          })}
        </nav>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
