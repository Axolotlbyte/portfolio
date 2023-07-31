import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Skillset from "../about/Skillset";

const Card = ({ title, img, description, using }) => {
  return (
    <AnimationOnScroll
      className="relative w-full h-auto mx-auto"
      animateIn="animate__fadeInRight"
      animateOnce
    >
      <Tilt>
        <div className="shadow-lg w-full rounded-lg p-4 outline hover:outline-red-500 bg-opacity-50 bg-purple-900 backdrop-blur-lg">
          <Image
            title={title}
            width={"1512"}
            height={"982"}
            alt=""
            layout="responsive"
            objectFit="contain"
            src={img}
          />
          <h1 className="text-xl font-semibold py-2">{title}</h1>
          <p className="text-lg py-2">
            Description of the project in about 2-3 lines. But it would be nice
            for it to be similar in length with other cards.
            {description}
          </p>
          <span className="font-semibold">Built using:</span>
          <Skillset skills={using} card />
        </div>
      </Tilt>
    </AnimationOnScroll>
  );
};

export default Card;
