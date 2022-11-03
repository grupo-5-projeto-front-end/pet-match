import { iPet } from "../../contexts/PetContext";
import { iUser } from "../../contexts/UserContext";
import { api } from "../api";

interface iUserPets extends iUser {
  pets: iPet[];
}

export const getPetsUser = async (id: number): Promise<iUserPets> => {
  const { data } = await api.get(`/users/${id}/?_embed=pets`);

  return data;
};
