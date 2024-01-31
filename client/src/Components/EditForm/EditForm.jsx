import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useLocation } from "react-router-dom";
import { FormContainer } from "../AddMembers/AddMemberForm";
import { schema } from "../AddMembers/AddMemberForm";

const EditMemberForm = ({ onSubmit, memberData }) => {
  const {
    handleSubmit,
    register,
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
    <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label>Name:</label>
        <input {...register("name")} placeholder="Name" />
        <p>{errors?.name?.message}</p>
      </div>

      <div>
        <label>Department:</label>
        <input {...register("department")} placeholder="Department Name" />
        <p>{errors?.department?.message}</p>
      </div>

      <div>
        <label>Photo:</label>
        <input {...register("photo")} placeholder="Copy Image URL" />
        <p>{errors?.photo?.message}</p>
      </div>

      <div>
        <label>Bio:</label>
        <textarea
          {...register("description")}
          placeholder="Brief Description"
        />
        <p>{errors?.description?.message}</p>
      </div>

      <div>
        <button type="submit">Confirm Edit</button>
      </div>
    </FormContainer>
  );
};

export default EditMemberForm;
