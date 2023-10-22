function ProjectImage(props) {
    return (
        <img src={require(props.path)}/>
    );
}

export default ProjectImage