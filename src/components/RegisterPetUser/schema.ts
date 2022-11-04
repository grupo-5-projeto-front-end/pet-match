import * as yup from "yup"

export const Schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    sexy: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
    breed: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Selecione uma categoria"),
    age:yup.string().required("Idade obrigatorio"),
    bio:yup.string().required("Nos fale sobre seu pet aqui"),
    avatar:yup.string().required("Foto do pet obrigatório")
})