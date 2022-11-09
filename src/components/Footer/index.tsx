import { StyledFooter } from "./style"
import { BsGithub, BsLinkedin } from "react-icons/bs"

export const Footer = () => {

    return (
        <StyledFooter>
            <div className="textContainer">
                <h3>Sobre:</h3>
                <p>O PetMatch foi desenvolvido por uma equipe dedicada com o objetivo de contribuir para o desenvolvimento de relacionamentos saudáveis entre pets 
                    e seus donos, de uma forma acessível e objetiva.
                </p>
            </div>

            <div className="textContainer">
                <h3>Contato:</h3>
                <div className="textContainer__wrapper">
                    <div className="textContainer__text">
                        <p>Douglas Borges</p>
                        <p>Greg Santos</p>
                        <p>Igor Silveira </p>
                        <p>Lucas Vaz </p>
                        <p>Matheus Gonçalves </p>
                        <p>Viniccius Reis</p>
                        <p>Vinicius Nascimento</p>
                    </div>
                    <div className="textContainer__links">
                        <span><a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                        <span><a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                        <span><a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                        <span><a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                        <span><a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                        <span><a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                        <span><a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                    </div>
                </div>
            </div>
        </StyledFooter>
    )
}