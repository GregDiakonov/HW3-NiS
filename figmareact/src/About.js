import AboutPoint from "./AboutPoint"

function About() {
    return (
        <div className = "about">
            <h2 style={{width: "60%"}}>Более 5 лет создаём мебель для вашего комфорта</h2>
            <div style={{width: "50%", marginTop: "5vh"}}>
                Мы - команда профессионалов, которые могут произвести любую мебель для вашего комфорта, а также найти производственное решение любой задумки.<br/><br/>
                Наша основная цель — реализовывать самые смелые задумки, и делать это качественно и аккуратно.<br/><br/>
                В качестве материалов мы используем натуральные — стекло, дерево, бетон, камень, металл и эпоксидную смолу.<br/><br/>
                <AboutPoint text="1 год" subtext="гарантии на всю продукцию"/>
                <AboutPoint text="300+" subtext="выполненных проектов"/>
                <AboutPoint text="15 дней" subtext="срок производства"/>
            </div>
        </div>
    );
}

export default About