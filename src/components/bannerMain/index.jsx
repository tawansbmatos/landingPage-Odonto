
import './style.css';
import {  FaWhatsapp } from 'react-icons/fa';
import banner from '../../assets/imgs/imgbanner.png';

export default function BannerMain() {
    return (
        <>
        <div className='overlay'></div>
            <main className="main">
                <img className='imgbanner' src={banner} alt="Banner da clínica" />

                <div class="banner-content">
                    <h1>Deixe seu <b>sorriso </b><br /><b>perfeito</b> ainda melhor</h1>
                    <a href="#"><FaWhatsapp className='link-social' size={25} color="#fff" />Faça uma avaliação gratuita</a>
                </div>
            </main>
        </>

    );
}