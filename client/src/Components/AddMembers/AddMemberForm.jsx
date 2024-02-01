import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  department: yup.string().required("Department is required"),
  photo: yup.string().required("Image URL is required"),
  description: yup.string().required("Description is required").min(30),
});

const AddMemberForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      maxWidth={"500px"}
      width={"100%"}
      overflow={"hidden"}
    >
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Box
          border={"solid 1px"}
          borderRadius={"3%"}
          padding={"20px"}
          textAlign={"center"}
          marginTop={"90px"}
        >
          <Typography
            variant="h4"
            fontSize={"26px"}
            fontWeight={"bold"}
            sx={{ marginBottom: "15px" }}
          >
            Add Members
          </Typography>
          <hr />
          <br />
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                placeholder="Enter your name"
                sx={{ marginTop: "10px" }}
                fullWidth
              />
            )}
          />
          <Box textAlign="left" p={2} padding={"1px"}>
            <Typography color={"red"} variant="p" textAlign={"left"}>
              {errors?.name?.message}
            </Typography>
          </Box>
          <Box>
            <Controller
              name="department"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Department"
                  placeholder="Department Name"
                  sx={{ marginTop: "10px" }}
                  fullWidth
                />
              )}
            />
            <Box textAlign="left" p={2} padding={"1px"}>
              <Typography color={"red"} variant="p">
                {errors?.department?.message}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Controller
              name="photo"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Photo"
                  placeholder="Paste Image URL"
                  sx={{ marginTop: "10px" }}
                  fullWidth
                />
              )}
            />
            <Box textAlign="left" p={2} padding={"1px"}>
              <Typography color={"red"} variant="p">
                {errors?.photo?.message}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  placeholder="Brief Description"
                  sx={{ marginTop: "10px" }}
                  multiline
                  rows={5}
                  fullWidth
                />
              )}
            />
            <Box textAlign="left" p={2} padding={"1px"}>
              <Typography color={"red"} variant="p">
                {errors?.description?.message}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              type="submit"
              variant="contained"
              sx={{ marginTop: "10px" }}
            >
              <Typography variant="button">Add Member</Typography>
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default AddMemberForm;
