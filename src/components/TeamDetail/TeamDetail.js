import React from "react";
import { useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";

const TeamDetail = () => {
  const location = useLocation();
  const team = location.state?.team;

  if (!team) {
    return <Typography variant="h5">No team selected.</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" component="h2">
        {team.title}
      </Typography>
      <Typography variant="body1">{team.description}</Typography>
    </div>
  );
};

export default TeamDetail;
