import logofinal from '../assets/imgs/musica2.svg'
import '../assets/styles/footer.css'
import '../assets/Styles/contacto.css'


function Footer() {
    return  (
        <footer>
            <div className="containerContact-titulo2">
            <img src={logofinal} alt="Final"/>
                <span>@MusicRockWorld Derechos Reservados</span>
            </div>
        </footer>
      );
}

export default Footer;