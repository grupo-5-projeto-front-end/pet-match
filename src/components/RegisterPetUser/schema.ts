import * as yup from "yup"

export const Schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    breed: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Selecione uma categoria"),
    sex: yup.string().required("Selecione sexo"),
    age:yup.string().required("Idade obrigatorio"),
    bio:yup.string().required("Nos fale sobre seu pet aqui"),
    avatar:yup.string().required("Foto do pet obrigatório"),
})