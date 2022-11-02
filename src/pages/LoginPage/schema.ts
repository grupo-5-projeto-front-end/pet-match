
import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Digite um email"),
    password: yup.string().required("Digite uma senha")
  });