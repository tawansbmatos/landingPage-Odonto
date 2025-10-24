
import ImgSobre from '../../assets/imgs/dentista3.png';
import './style.css';
import { FaCheckCircle } from 'react-icons/fa';


export default function Sobre() {
    return (

        <section id='Sobre' className='containerSobre'>
            <div className='content'>
                <div className='bgcolorImg'>
                    <img className='imgsobre' src={ImgSobre} alt="Imagem dentista" />
                </div>
                <div className='textContent'>
                    <h2><b>5 Anos de Experiência</b> em atendimento odontológico</h2>
                    <p>falar sobre as experinecias e qualificaçoes de uma dentista no mercado consolidado </p>

                    <div className='box-exp'>
                        <FaCheckCircle className='ic' size={20} color="#33c48f" />
                        <span className='sp'>mais de 100 clientes satisfeiros</span>
                    </div>
                    <div className='box-exp'>
                        <FaCheckCircle className='ic' FaFacebook size={20} color="#33c48f" />
                        <span className='sp' >Especialista em Endodontia</span>
                    </div>
                    <div className='box-exp'>
                        <FaCheckCircle className='ic' size={20} color="#33c48f" />
                        <span className='sp'>Extenção em Ortodontia</span>
                    </div>
                    <div className='box-exp'>
                        <FaCheckCircle className='ic' size={20} color="#33c48f" />
                        <span className='sp'>pós-graduado em Pério</span>
                    </div>
                </div>
            </div>
        </section>


    );
}