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
      <div className="py-8 grid lg:grid-cols-3 gap-9">
        {projectList.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            img={project.img}
            description={project.descrition}
            using={project.using}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
