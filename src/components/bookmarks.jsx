import React from "react";
import { BookmarksList } from "../config";
import { Container, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

function Bookmarks() {
  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {BookmarksList.map((data, key) => {
            return (
              <Link href={data.url} target={data.target} underline="none">
                <Box
                  component="span"
                  sx={{
                    border: "1px dashed grey",
                    p: 2,
                  }}
                >
                  <Button
                    sx={{
                      p: 2,
                    }}
                  >
                    {data.name}
                  </Button>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Container>
    </>
  );
}

export default Bookmarks;
