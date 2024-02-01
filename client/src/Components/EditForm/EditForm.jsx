import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useLocation } from "react-router-dom";
import { FormContainer } from "../AddMembers/AddMemberForm";
import { schema } from "../AddMembers/AddMemberForm";
import { Box, Button, TextField, Typography } from "@mui/material";

const EditMemberForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { id } = useParams();
  const { search } = useLocation();

  const queryParams = new URLSearchParams(search);

  const name = queryParams.get("name");
  const description = queryParams.get("description");
  const photo = queryParams.get("photo");
  const department = queryParams.get("department");

  React.useEffect(() => {
    const initialData = { name, department, description, photo };
    if (initialData) {
      setValue("name", initialData.name);
      setValue("department", initialData.department);
      setValue("photo", initialData.photo);
      setValue("description", initialData.description);
    }
  }, [department, name, photo, description, setValue]);

  const handleFormSubmit = (data) => {
    onSubmit(data, id);
  };

  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      maxWidth={"500px"}
      width={"100%"}
      overflow={"hidden"}
    >
      <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
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
            Edit Members
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
              <Typography variant="button">Edit Member</Typography>
            </Button>
          </Box>
        </Box>
      </FormContainer>
    </Box>
  );
};

export default EditMemberForm;
