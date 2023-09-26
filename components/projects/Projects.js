import SectionWrapper from "../SectionWrapper";
import Card from "./Card";
import { projectList } from "../../constants";

const Projects = () => {
  return (
    <SectionWrapper
      id={"projects"}
      title={"Projects"}
      subtitle={"What I have Built"}
      img={"/assets/backgrounds/purple-gradient.webp"}
      extraStyles={""}
    >
      <div className="w-full grid gap-9 backdrop-blur-lg">
        {projectList.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            img={project.img}
            description={project.descrition}
            using={project.using}
            github={project.github}
            live={project.live}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
