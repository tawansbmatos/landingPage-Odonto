import './style.css';
import { FaTooth, FaSmile, FaChild, FaXRay, FaTeethOpen, FaProcedures } from 'react-icons/fa';

export default function Servicos() {
  return (
    <section className="sc_services" id="Services">
      <div className="textContent">
        <h2>Serviços mais procurados</h2>
        <p>Tudo o que você procura em um só lugar</p>
        <a href="#">Fale com um especialista</a>
      </div>

      <div className="box-cards">
        <div className="cards">
          <FaTooth className="dent-card" size={50} color="#fff" />
          <h4>Limpeza Dental</h4>
          <p>Remoção de placa e tártaro para prevenção</p>
        </div>
        <div className="cards">
          <FaSmile className="dent-card" size={50} color="#fff" />
          <h4>Clareamento</h4>
          <p>Deixe seu sorriso mais branco e radiante</p>
        </div>
        <div className="cards">
          <FaTeethOpen className="dent-card" size={50} color="#fff" />
          <h4>Implantes</h4>
          <p>Reposição de dentes com tecnologia moderna</p>
        </div>
        <div className="cards">
          <FaTooth className="dent-card" size={50} color="#fff" />
          <h4>Tratamento de Canal</h4>
          <p>Preservação de dentes com infecção na raiz</p>
        </div>
        <div className="cards">
          <FaChild className="dent-card" size={50} color="#fff" />
          <h4>Odontopediatria</h4>
          <p>Cuidados especiais para os pequenos</p>
        </div>
        <div className="cards">
          <FaProcedures className="dent-card" size={50} color="#fff" />
          <h4>Cirurgia Oral</h4>
          <p>Extrações e procedimentos avançados</p>
        </div>
        <div className="cards">
          <FaXRay className="dent-card" size={50} color="#fff" />
          <h4>Radiologia</h4>
          <p>Diagnóstico preciso com imagens digitais</p>
        </div>
        <div className="cards">
          <FaSmile className="dent-card" size={50} color="#fff" />
          <h4>Estética Dental</h4>
          <p>Facetas, lentes e remodelação do sorriso</p>
        </div>
      </div>
    </section>
  );
}