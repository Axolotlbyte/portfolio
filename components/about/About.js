import SectionWrapper from "../SectionWrapper";
import Skillset from "./Skillset";
import { skills } from "../../constants";

const About = () => {
  return (
    <SectionWrapper id={"about"} title={"About me"} subtitle={"Who I am"}>
      <div className="w-full bg-transparent py-4">
        <p className="w-full md:w-1/2">
          As a Computer Science B.Tech graduate, I specialize in crafting
          digital experiences. Proficient in JavaScript, Python, and React.js, I
          create applications that aim for exceptional user interactions. My
          portfolio reflects my dedication to innovation and effective
          problem-solving.
          <br className="py-1 block" />
          <br />
          I value continuous learning and close collaboration with clients to
          bring their visions to life. I aim to create digital experiences that
          resonate with users by pushing boundaries and paying attention to
          detail.
          <br className="py-1 block" />
          <br />
          Let's collaborate to turn your ideas into impactful realities. With my
          expertise in software development and detail-oriented design, I'm here
          to contribute to your projects with precision and creativity.
          {/* <br className="py-1 block" />
          <br />
          When Arzaan isn&apos;t working hard at some project, you&apos;ll find
          him enjoying sketching and digital painting. */}
        </p>
      </div>
      <Skillset skills={skills} />
    </SectionWrapper>
  );
};

export default About;
