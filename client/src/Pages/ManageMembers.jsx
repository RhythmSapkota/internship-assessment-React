import React from "react";
import AddMemberForm from "../Components/AddMembers/AddMemberForm";
import { useParams, useNavigate } from "react-router-dom";
import EditMemberForm from "../Components/EditForm/EditForm";
import { toast } from "react-toastify";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { createMember, editData } from "../utils/apis";

const ManageMembers = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const createMutatuon = useMutation({
    mutationFn: async (data) => await createMember(data),
  });

  const handleSubmit = (data) => {
    console.log(data);

    createMutatuon
      .mutateAsync(data, {
        onSuccess: toast.success("Membership Created"),
      })
      .then((res) => queryClient.invalidateQueries());
    navigate("/");
  };

  const queryClient = useQueryClient();

  const editMutation = useMutation({
    mutationFn: async (id, data) => await editData(id, data),
  });

  const handleEdit = (data, id) => {
    const updatedData = {
      id,
      ...data,
    };

    editMutation
      .mutateAsync(updatedData, {
        onSuccess: toast.success("Member Edited"),
      })
      .then((res) => queryClient.invalidateQueries());
    navigate("/");
  };

  return (
    <>
      {id ? (
        <EditMemberForm onSubmit={handleEdit} />
      ) : (
        <AddMemberForm onSubmit={handleSubmit} />
      )}
    </>
  );
};

export default ManageMembers;
