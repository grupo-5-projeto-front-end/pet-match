import { iPet } from "../../contexts/PetContext";
import { api } from "../api";

export interface iBodyPatchPet {
  name?: string;
  sex?: string;
  category?: string;
  breed?: string;
  age?: string;
  bio?: string;
  avatar?: string;
  image?: string[];
  visible?: boolean;
}

export const patchPet = async (
  id: number,
  body: iBodyPatchPet
): Promise<iPet> => {
  const { data } = await api.patch(`/pets/${id}`, body);

  return data;
};
