import Image from "next/image";

const ServiceCard = ({ title, icon, description }) => {
  return (
    <div className="w-full backdrop-blur-md bg-gray-700 bg-opacity-30 text-center shadow-md rounded-md h-auto p-4">
      {icon ? (
        <Image alt="service image" width={75} height={75} src={`${icon}`} />
      ) : null}
      <h1 className="divide-y-2 text-white text-xl font-bold">{title}</h1>
      <hr className="w-10/12 mx-auto" />
      <p className="text-gray-100 text-lg">{description}</p>
      <a href="#contact">
        <button className="bg-cyan-500 mt-4 p-2 text-white font-semibold rounded-md">
          Contact Now
        </button>
      </a>
    </div>
  );
};

export default ServiceCard;
