import axiosInstance from "./axiosInstance";

export const getPartners = async () => {
  try {
    const response = await axiosInstance.get("/partners");
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des partenaires", error);
    throw error;
  }
};
