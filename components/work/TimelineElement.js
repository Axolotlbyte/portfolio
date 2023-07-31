import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineElement = ({ title, date, place, points, icon }) => {
  return (
    <VerticalTimelineElement
      date={date}
      className=""
      contentArrowStyle={{ color: "black" }}
      contentStyle={{ background: "rgb(0, 0, 0, 0.5)" }}
      icon={icon}
      iconClassName="bg-black"
    >
      <h1 className="text-xl font-bold">{title}</h1>
      <p className="font-light italic pb-2">{place}</p>
      <ol>
        {points.map((point) => (
          <li key={point.split()[0]} className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-dot w-6 h-6 flex-shrink-0 flex-grow-0"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
            </svg>
            {point}
          </li>
        ))}
      </ol>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
