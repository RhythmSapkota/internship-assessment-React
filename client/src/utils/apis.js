import { apiInstance } from "./axiosInstance";

export const deleteData = async (id) => {
  try {
    const response = await apiInstance.delete(`/member/${id}`);
    console.log("heresss", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const editData = async (updatedData) => {
  try {
    const response = await apiInstance.put(
      `/member/${updatedData.id}`,
      { updatedData },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data); // Assuming you want to log the response data
  } catch (error) {
    console.error("Error editing data:", error);
    throw error;
  }
};

export const createMember = async (data) => {
  try {
    const response = await apiInstance.post("/members", data);
    console.log(response.data);
  } catch (error) {
    console.log("Error");
  }
};
