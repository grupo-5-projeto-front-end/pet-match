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
                        <h4>Douglas Borges</h4>
                        <h4>Gregory Santos</h4>
                        <h4>Igor Silveira </h4>
                        <h4>Lucas Vaz </h4>
                        <h4>Matheus Gonçalves </h4>
                        <h4>Viniccius Reis</h4>
                        <h4>Vinicius Nascimento</h4>
                    </div>
                    <div className="textContainer__links">
                        <span><a href="https://github.com/DouglasB834" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="https://www.linkedin.com/in/douglassborges/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                        <span><a href="https://github.com/GregStoz" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="https://www.linkedin.com/in/gregory-santos-dev/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                        <span><a href="https://github.com/devIgorSilveira" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="http://www.linkedin.com/in/igorcoutodasilveira" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                        <span><a href="https://github.com/lucasvazo" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="https://www.linkedin.com/in/lucasvazn/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                        <span><a href="https://github.com/matheuscg13" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                        <span><a href="https://github.com/Vinicius-reis2" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="http://google.com.br" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                        <span><a href="https://github.com/VinofSteel" target="_blank" rel="noopener noreferrer"><BsGithub/></a> <a href="https://www.linkedin.com/in/vinicius-nascimento-82884023b/" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a></span>
                    </div>
                </div>
            </div>
        </StyledFooter>
    )
}