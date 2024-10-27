import React from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const NewsDetail = () => {
  const location = useLocation();
  const news = location.state?.news;

  if (!news) {
    return <Typography variant="h5">No news selected.</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        {news.title}
      </Typography>
      <Typography variant="h4" component="h4" gutterBottom>
        {news.date}
      </Typography>
      <Box
        component="img"
        src={news.image}
        alt={news.title}
        sx={{
          width: "100%",
          height: "auto",
          maxHeight: "300px",
          objectFit: "contain",
          borderRadius: 2,
          mb: 2,
        }}
      />
      <Typography variant="body1">{news.description}</Typography>
    </Box>
  );
};

export default NewsDetail;
