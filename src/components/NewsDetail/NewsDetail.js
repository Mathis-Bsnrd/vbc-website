import React from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

const NewsDetail = () => {
  const location = useLocation();
  const news = location.state?.news;

  if (!news) {
    return <Typography variant="h5">No news selected.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" component="h2">
        {news.title}
      </Typography>
      <Typography variant="body1">{news.description}</Typography>
    </div>
  );
};

export default NewsDetail;
