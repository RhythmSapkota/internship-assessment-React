import React from "react";
import { apiInstance } from "../utils/axiosInstance";
import MembersList from "../Components/MembersList/MembersList";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { deleteData } from "../utils/apis";
import ErrorFetch from "../Components/Errors/ErrorFetch";
import { Skeleton, Stack, Typography } from "@mui/material";
import { FiLoader } from "react-icons/fi";

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
  const {
    isLoading,
    isError,
    isFetching,
    isPending,
    data: membersData,
  } = useQuery({
    queryKey: ["membersData"],
    queryFn: fetchData,
  });

  const deleteMutation = useMutation({
    mutationKey: ["deleteMutation"],
    mutationFn: (id) => deleteData(id),
  });
  const deleteController = (id) => {
    console.log(id);
    deleteMutation.mutateAsync(id).then(() => {
      queryClient.invalidateQueries();
      toast.success("Deleted Member Successfully");
    });
  };

  const editController = (id, name, description, photo, department) => {
    const queryString = `?id=${id}&name=${name}&description=${description}&photo=${photo}&department=${department}`;
    navigate(`/manage-members/edit-member/${id}${queryString}`);
  };

  return (
    <>
      <Typography variant="h4" marginTop={"35px"}>
        Our Members
      </Typography>
      {isLoading || isPending || isFetching ? (
        <>
          <Stack spacing={1} marginTop="70px">
            <Typography variant="h4" marginTop={"35px"} textAlign={"center"}>
              Loading <FiLoader size={"30px"} />
            </Typography>

            <Skeleton
              variant="text"
              sx={{ fontSize: "2rem", marginTop: "140px" }}
            />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={100} height={100} />
            <Skeleton variant="rectangular" width={510} height={100} />
            <Skeleton variant="rounded" width={510} height={100} />
          </Stack>
        </>
      ) : isError ? (
        <ErrorFetch />
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
