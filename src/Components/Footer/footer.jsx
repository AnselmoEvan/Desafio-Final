import face from "../../assets/facebook.png"
import insta from "../../assets/instagram.png"
import twitt from "../../assets/Twitter.png"
import linkedin from "../../assets/linkedin.png"
import youtube from "../../assets/youtube.png"
import S from"./footer.module.scss"

export default function footer(){
    return(
        <footer>
            <section className={S.boxSocial}>
                <h3>4002-8922</h3>
                <nav>
                    <a href=""> <img src={face} alt="Imagem do logo do facebook" /> </a>
                    <a href=""> <img src={twitt} alt="Imagem do logo do twitt" /> </a>
                    <a href=""> <img src={youtube} alt="Imagem do logo do youtobe" /> </a>
                    <a href=""> <img src={linkedin} alt="Imagem do logo do linkedin" /> </a>
                    <a href=""> <img src={insta} alt="Imagem do logo do instragam" /> </a>
                </nav>
            </section>
            <section className={S.boxEnd}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
        
    )
}