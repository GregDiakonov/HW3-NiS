function StepsPoint(props) {
    return(
        <div className="steps-point">
            <h3 style={{fontSize: "36px", width: "70%", marginTop: "0px"}}>{props.stepName}</h3>
            <p style={{lineHeight: "22.4px"}}>{props.stepText}</p>
        </div>
    );
}

export default StepsPoint