import bigHero from "./icons/bigimg.png";
import smallHero from "./icons/smallimg.png";

function Hero() {
    return(
        <div className="hero">
            <div className = "hero1"><h1 >ЭКСКЛЮЗИВНАЯ И НЕСТАНДАРТНАЯ МЕБЕЛЬ ДЛЯ ДОМА</h1></div>
            <div className = "hero2"><a>ЗАКАЗАТЬ ПРОЕКТ</a></div>
            <div className = "hero3">Мы можем произвести любую мебель для вашего проекта и найти производственное решение любой задумки.</div>
            <img className="hero4" style={{width: "100%", height: "100%"}} src={bigHero}/>
            <img className="hero5" style={{width: "50%", height: "100%"}} src={smallHero}/>
        </div>
    );
}

export default Hero;