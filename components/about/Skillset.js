// import { skills } from "../../constants";

const Skillset = ({ skills, card }) => {
  return (
    <section
      title="skillset"
      className={"py-2 w-full" + (card ? "" : " md:w-1/2 pt-8")}
    >
      <h1
        className={
          "text-2xl lg:text-4xl font-semibold pb-6" + (card ? " hidden" : "")
        }
      >
        Skillset
      </h1>
      {skills.map((skill) => (
        <div
          key={skill}
          title={skill}
          className="p-2 rounded-md bg-black px-3 font-medium text-white w-min inline-block mr-2 mb-2 whitespace-nowrap"
        >
          {skill}
        </div>
      ))}
    </section>
  );
};

export default Skillset;
