import  './App.css';
import BannerMain from './components/bannerMain';
import Header from './components/header';
import Sobre from './components/main';

export default function App() {
  return (
    <div className="App">
    <Header />
    <BannerMain />
    <Sobre />
    </div>
  );
}


