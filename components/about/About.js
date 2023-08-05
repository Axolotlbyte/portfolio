import SectionWrapper from "../SectionWrapper";
import Skillset from "./Skillset";
import { skills } from "../../constants";

const About = () => {
  return (
    <SectionWrapper id={"about"} title={"About me"} subtitle={"Who I am"}>
      <div className="w-full bg-transparent py-4">
        <p className="w-full md:w-1/2">
          I am a B.Tech graduate in Computer Science, specializing in crafting
          captivating digital experiences. Proficient in JavaScript, Python, and
          React.js, I create applications that deliver exceptional user
          interactions. My portfolio reflects a commitment to innovation,
          seamless solutions, and effective problem-solving.
          <br className="py-1 block" />
          <br />
          I am dedicated to continuous learning, adapting to industry trends,
          and collaborating closely with clients to bring their visions to life.
          With a passion for pushing boundaries and an eye for detail, I strive
          to create remarkable digital experiences that resonate with users.
          <br className="py-1 block" />
          <br />
          Let's embark on a journey together to transform ideas into impactful
          realities. Specialising in software development with his
          Detail-Oriented designing techniques.
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
