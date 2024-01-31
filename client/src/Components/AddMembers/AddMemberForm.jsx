import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";

export const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  department: yup.string().required("Department is required"),
  photo: yup.string().required("Image URL is required"),
  description: yup.string().required("Description is required").min(30),
});

// Styled components
export const FormContainer = styled.form`
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  & > div {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }

    input,
    textarea {
      width: 100%;
      padding: 8px;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    p {
      color: red;
      margin-top: 5px;
    }
  }

  button {
    padding: 10px 15px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
  }
`;

const AddMemberForm = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    // Assuming onSubmit is a function passed as a prop
    onSubmit(data);
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
        <button type="submit">Add Member</button>
      </div>
    </FormContainer>
  );
};

export default AddMemberForm;
