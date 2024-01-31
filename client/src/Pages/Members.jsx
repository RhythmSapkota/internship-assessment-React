import React from "react";
import { apiInstance } from "../utils/axiosInstance";
import MembersList from "../Components/MembersList/MembersList";
import { useNavigate } from "react-router-dom";
import { useQuery,useQueryClient,useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { deleteData } from "../utils/apis";

const Members = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const fetchData = async () => {
    try {
      const response = await apiInstance.get("members");
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  const { isLoading, isError, data: membersData } = useQuery({
    queryKey: ["membersData"],
    queryFn: fetchData
  })
  
  const deleteMutation = useMutation({
    mutationKey: ["deleteMutation"],
    mutationFn: (id) => deleteData(id)
  });
  const deleteController = (id) => {
    console.log(id)
deleteMutation.mutateAsync(id).then(()=>{
  queryClient.invalidateQueries();
})
  };

  const editController = (id, name, description, photo, department) => {
    const queryString = `?id=${id}&name=${name}&description=${description}&photo=${photo}&department=${department}`;
    navigate(`/manage-members/edit-member/${id}${queryString}`);
  };

  return (
    <>
      <h1>Our Members</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching data</p>
      ) : (
        <MembersList
          members={membersData}
          handleDelete={deleteController}
          handleEdit={editController}
        />
      )}
    </>
  );
};

export default Members;
