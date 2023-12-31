import Testimonial from "./testimonial.js"

function Testimonials() {
    return(
        <div>
            <h2 style={{marginBottom: "2vw", marginTop: "3vw"}}>Отзывы</h2>
            <div className="testimonials">
                <Testimonial name="Игорь Антонов" text="Обратился к Aveji по рекомендации. Команда сразу поняла, какой дизайн я хочу.
                    Предоставили несколько вариантов и в течение недели сделали наброски. Итог понравился, все на высшем уровне."/>
                <Testimonial name="Ольга Иванова" text="После пары заказов у компании Aveji убедилась, что за мебелью теперь только к ним.
                    Абсолютно любые решения, в любых размерах и форм-факторе, то что нужно!"/>
                <Testimonial name="Аркадий Макаров" text="Aveji — настоящие профессионалы своего дела. Быстро поняли мою задумку, сделали дизайн,
                    согласовали и изготовили мебель. А потом еще и бесплатно все собрали на месте. Большое спасибо!"/>
            </div>
        </div>
    );
}

export default Testimonials;