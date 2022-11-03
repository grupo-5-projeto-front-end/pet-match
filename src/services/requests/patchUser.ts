// import { iUser } from "../../contexts/UserContext";
// import { api } from "../api";

export interface iBodyPatchUser {
  name?: string;
  city?: string;
  adress?: string;
  email?: string;
  password?: string;
  tel?: string;
  avatar?: string | null;
  favoritePets?: [];
}

// export const patchUser = async ( id: number, body: iBodyPatchUser): Promise<iUser> => {
//   const { data } = await api.patch(`/users/${id}`, body);

//   return data;
// };
