import Quote from "./icons/icon.png"

function Testimonial (props) {
    return (
        <div className = "testimonial">
            <img src={Quote}/>
            <p style={{textAlign: "center", width: "60%"}}><p className="large-bold-text">{props.name}</p><br/>{props.text}</p>
        </div>
    );
}

export default Testimonial;