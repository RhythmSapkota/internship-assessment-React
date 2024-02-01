import React from "react";
import Member from "./Member";
import { Grid, CircularProgress } from "@mui/material";

const MembersList = ({ members, handleDelete, handleEdit }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {members ? (
        members.map((member) => (
          <Grid key={member.id} item xs={12} sm={6} md={4}>
            <Member
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              {...member}
            />
          </Grid>
        ))
      ) : (
        <Grid item>
          <CircularProgress />
        </Grid>
      )}
    </Grid>
  );
};

export default MembersList;
