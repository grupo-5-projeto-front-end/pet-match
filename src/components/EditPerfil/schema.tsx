import * as yup from "yup"

export const Schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
    adress: yup.string().required("campo obrigatório"),
    city: yup.string().required("selecione"),
    tel:yup.string().required("campo obrigatório").min(11,"no minimo 10 numero")
})