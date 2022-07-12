import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import Image from "next/image";

const Card = ({ backgroundImage, title, image, heading, description }) => {
  return (
    <div
      style={{ backgroundImage: `url("${backgroundImage}")` }}
      className="w-full relative overflow-hidden h-auto bg-fixed bg-cover py-8 flex flex-col-reverse md:flex-row gap-6 px-6 "
    >
      <div className="w-full md:w-2/5">
        <h1 className="text-5xl font-bold">{heading}</h1>
        <p className="text-lg text-gray-200 pt-2">{description}</p>
      </div>
      <AnimationOnScroll
        className="relative w-full md:w-3/5 h-auto mx-auto"
        animateIn="animate__fadeInUp"
      >
        <div className="shadow-lg shadow-black hover:shadow-cyan-900 rounded-lg">
          <Image
            title={title}
            width={"1512"}
            height={"982"}
            alt=""
            layout="responsive"
            objectFit="contain"
            src={image}
          />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Card;
