import  './App.css';
import BannerMain from './components/bannerMain';
import Header from './components/header';
import Sobre from './components/main';
import Servicos from './components/servicos';

export default function App() {
  return (
    <div className="App">
    <Header />
    <BannerMain />
    <Sobre />
    <Servicos />
    <Sobre />
    </div>
  );
}


