import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Grid,
  Avatar,
} from "@mui/material";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Member = ({
  id,
  name,
  department,
  description,
  photo,
  handleEdit,
  handleDelete,
}) => {
  const handleEditItem = (e) => {
    e.preventDefault();
    handleEdit(id, name, description, photo, department);
  };

  const handleDeleteItem = (e) => {
    e.preventDefault();
    handleDelete(id);
  };

  return (
    <Card sx={{ maxWidth: 300, textAlign: "center", mx: 2, my: 2 }}>
      <Avatar
        sx={{ width: 80, height: 80, mx: "auto", my: 2 }}
        alt={`${name}'s photo`}
        src={photo}
      />
      <CardContent>
        <Typography variant="h5" color="text.primary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {department}
        </Typography>
        {description && (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ wordWrap: "break-word" }}
          >
            {description}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Grid container justifyContent="center">
          <Button onClick={handleEditItem} variant="outlined" color="primary">
            <FaEdit size={20} style={{ marginRight: 8 }} />
            Edit
          </Button>
          <Button
            onClick={handleDeleteItem}
            variant="outlined"
            color="error"
            style={{ marginLeft: "10px" }}
          >
            <MdDeleteForever style={{ fontSize: "20px", marginRight: 8 }} />
            Delete
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Member;
