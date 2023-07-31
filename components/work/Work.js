import SectionWrapper from "../SectionWrapper";
import TimelineElement from "./TimelineElement";
import { experienceList } from "../../constants";
import { VerticalTimeline } from "react-vertical-timeline-component";

const Work = () => {
  return (
    <SectionWrapper
      id={"work"}
      title={"Work & Education"}
      subtitle={"What I have done so far"}
      img={"/assets/backgrounds/rocket.webp"}
      extraStyles={"bg-fixed"}
    >
      <div className="py-24">
        <VerticalTimeline>
          {experienceList.map((exp) => (
            <TimelineElement key={exp.id} title={exp.title} date={exp.date} place={exp.place} points={exp.points} icon={exp.icon} />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};

export default Work;
