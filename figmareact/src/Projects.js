import first from "./icons/showcase/show1.png"
import second from "./icons/showcase/show2.png"
import third from "./icons/showcase/show3.png"
import fourth from "./icons/showcase/show4.png"
import fifth from "./icons/showcase/show5.png"
import sixth from "./icons/showcase/show6.png"

function Projects() {
    return(
        <div style={{marginLeft: "2%", width: "96%"}}>
            <h2>Проекты</h2>
            <div className = "projects">
                <img class="project-image" src={first}/>
                <img class="project-image" src={second}/>
                <img class="project-image" src={third}/>
                <img class="project-image" src={fourth}/>
                <img class="project-image" src={fifth}/>
                <img class="project-image" src={sixth}/>
            </div>
        </div>
    );
}

export default Projects