import React from "react";
import Member from "./Member";
import styled from "styled-components";
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const MembersList = ({ members, handleDelete, handleEdit }) => {
  console.log(members);
  return (
    <Grid>
      {members ? (
        members.map((member) => (
          <Member
            key={member.id}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            {...member}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </Grid>
  );
};

export default MembersList;
