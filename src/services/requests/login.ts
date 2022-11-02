import { iUser } from "../../contexts/UserContext";
import { api } from "../api";

export interface iLoginRegister {
  email: string;
  password: string;
}

interface iDataLogin {
  accessToken: string;
  user: iUser;
}

export const login = async (body: iLoginRegister): Promise<iDataLogin> => {
  const { data } = await api.post("/login", body);

  return data;
};
