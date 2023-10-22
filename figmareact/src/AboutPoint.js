function AboutPoint(props) {
    return (
        <div className = "about-point">
            <h2 style={{margin: "1px", fontSize: "36px"}}>{props.text}</h2>
            <p>{props.subtext}</p>
        </div>
    );
}

export default AboutPoint;