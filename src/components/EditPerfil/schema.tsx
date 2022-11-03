import * as yup from "yup"

export const Schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório"),
    adress: yup.string().required("campo obrigatório"),
    city: yup.string().required("selecione"),
    tel:yup.string().required("campo obrigatório")
})