import axios from "axios";
import { List } from "@mui/material";
import Link from "@mui/material/Link";
import { Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Loader from "./loader";

const baseURL = "http://www.reddit.com/.json?limit=5";
function ShowReddit() {
  const [isLoading, setLoading] = useState(true);
  const [post, setPost] = React.useState(null);
  React.useEffect((ShowReddit) => {
    axios.get(baseURL).then((response) => {
      setPost(response.data.data.children);
      setLoading(false);
    });
  }, []);
  return (
    <Container maxWidth="sm">
      <Typography
        variant="overline"
        display="block"
        sx={{ mt: 2, mb: 1 }}
        gutterBottom
      >
        Reddit /all
      </Typography>
      <CharacterGrid isLoading={isLoading} items={post} />
    </Container>
  );
}

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Loader />
  ) : (
    items.map((i) => (
      <List key={i.data.id}>
        <Link href={"https://reddit.com" + i.data.permalink} target="_blank">
          {i.data.title}
        </Link>{" "}
        (
        <Link
          href={"https://reddit.com/" + i.data.subreddit_name_prefixed}
          target="_blank"
        >
          {i.data.subreddit_name_prefixed}
        </Link>
        )
      </List>
    ))
  );
};

export default ShowReddit;
