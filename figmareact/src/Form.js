import FormImage from "./icons/showcase/formimg.png";

function Form() {
    return(
        <div className="form">
            <img src={FormImage} style={{width: "70%", height: "100%"}}/>
            <div>
                <h2>Хотите заказать проект?</h2>
                <p style={{marginBottom: "5vh"}}>Оставьте заявку, и мы вам перезвоним.</p>
                <input type="text" id="name" name="name" placeholder="Имя"/><br/>
                <input type="text" id="email" name="email" placeholder="E-mail"/><br/>
                <input type="text" id="phone" name="phone" placeholder="Телефон"/><br/>
                <button>Отправить заявку</button>
            </div>
        </div>
    );
}

export default Form;