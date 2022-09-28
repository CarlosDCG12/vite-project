import logoApp from '../assets/imgs/musica.svg'
import '../assets/styles/header.css'
import '../assets/Styles/contacto.css'

function Header() {
    return (
        <header>
            <div className="containerContact-titulo">
            <img src={logoApp} alt="Logo oficial del sitio" />
                <span>MusicRockWorld</span>
            </div>
        </header>
      );
}

export default Header;