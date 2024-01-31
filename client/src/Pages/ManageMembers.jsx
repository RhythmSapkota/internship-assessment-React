import React from "react";
import AddMemberForm from "../Components/AddMembers/AddMemberForm";
import { useParams, useNavigate } from "react-router-dom";
import EditMemberForm from "../Components/EditForm/EditForm";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMember, editData } from "../utils/apis";

const ManageMembers = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const createMutatuon = useMutation({
    mutationFn: async (data) => await createMember(data),
  });

  const handleSubmit = (data) => {
    console.log(data);

    createMutatuon.mutateAsync(data, {
      onSuccess: toast.success("Membership Created"),
    });

    queryClient.invalidateQueries();
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

    editMutation.mutate(updatedData, {
      onSuccess: queryClient.invalidateQueries(),
    });
    navigate("/");
    toast.success("Member Edited");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        {id ? "Edit Member" : "Add Member"}
      </h1>

      {id ? (
        <EditMemberForm onSubmit={handleEdit} />
      ) : (
        <AddMemberForm onSubmit={handleSubmit} />
      )}
    </>
  );
};

export default ManageMembers;
