import './styles.css';
import { FaFacebook, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-scroll';


export default function Header() {
    return (
        <header className='header'>
            <a href="#Home"><h1>Dental<b>Care</b></h1></a>

            <ul className='lista'>
                <li className='li'><a href="#Home">Home</a></li>
                <li className='li'><a href="#Sobre">Sobre</a></li>
                <li className='li'><a href="#Services">Serviços</a></li>
                <li className='li'><a href="#Contato">Contato</a></li>
                <li className='li'><a href="#Agendamento">Agendamento</a></li>
            </ul>
            <div className="social-icons">
                <a href="https://facebook.com/seuPerfil" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className='link-social' size={27} color="#4267B2" />
                </a>
                <a href="https://wa.me/seuNumero" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className='link-social' size={27} color="#25D366" />
                </a>
                <a href="https://instagram.com/seuPerfil" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='link-social' size={27} color="#E1306C" />
                </a>
                <a href="https://tiktok.com/@seuPerfil" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className='link-social' size={27} color="#000000" />
                </a>
            </div>


        </header>


    );
}