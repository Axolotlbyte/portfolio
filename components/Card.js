const Card = ({ reverse }) => {
  return (
    <section
      className={"w-full h-auto flex mt-2 gap-2" + (reverse ? " flex-row-reverse" : "")}
    >
      <div className="w-1/2 aspect-square bg-black relative flex items-center justify-center">
        <div className=" w-11/12 aspect-square bg-transparent border-2 border-pink-500"></div>
      </div>
      <div className="flex flex-col w-1/2">
        <div className="h-1/2"></div>
        <div className="h-1/2 bg-blue-400"></div>
      </div>
      <style jsx>{`
        .aspect-card {
          aspect-ratio: 1/1;
        }
      `}</style>
    </section>
  );
};

export default Card;
