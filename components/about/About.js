import SectionWrapper from "../SectionWrapper";
import Skillset from "./Skillset";
import { skills } from "../../constants";

const About = () => {
  return (
    <SectionWrapper id={"about"} title={"About me"} subtitle={"Who I am"}>
      <div className="w-full bg-transparent py-4">
        <p className="w-full md:w-1/2">
          Born and Raised in India, He is currently pursuing a bachelor&apos;s
          degree in Computer Science. Specialising in software development with
          his Detail-Oriented designing techniques.
          <br className="py-1 block" />
          <br />
          He has aquired a wide range of skills including leading technologies
          in development and excellent ability to grasp concepts and retain new
          information.
          <br className="py-1 block" />
          <br />
          His main skillset consists of - Javascript, Python, Sql, React,
          Nodejs, Express.
          <br className="py-1 block" />
          <br />
          When Arzaan isn&apos;t working hard at some project, you&apos;ll find
          him enjoying sketching and digital painting.
        </p>
      </div>
      <Skillset skills={skills} />
    </SectionWrapper>
  );
};

export default About;
