import * as yup from "yup";

export const registerFormSchema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email valido!")
    .required("Deve ser um email valido!"),
  name: yup
    .string()
    .required("Nome é obrigatorio!"),
  password: yup
    .string()
    .matches(/.{6}/, "deve conter no mínimo 6 digitos"),
  city: yup
    .string()
    .required("Cidade é obrigatorio!"),
  adress: yup
    .string()
    .required("Estado é obrigatorio!"),
  tel: yup
    .string()
    .required("Telefone é obrigatorio!")
    .matches(/.{11}/, "deve conter no mínimo 11 digitos"),
  avatar: yup
    .string()
})