import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import Skillset from "../about/Skillset";

const Card = ({ title, img, description, using, github, live }) => {
  return (
    <AnimationOnScroll
      className="relative w-full h-auto mx-auto"
      animateIn="animate__fadeInUp"
      animateOnce
    >
      {/* <Tilt> */}
      <div className="w-full flex flex-col lg:flex-row gap-5 rounded-lg mt-10 hover:outline-red-500 backdrop-blur-lg">
        <a
          href={live}
          target="_blank"
          className="relative w-full lg:w-2/5 flex-shrink-0"
        >
          <div className="relative w-full">
            <Image
              title={title}
              width={"1512"}
              shadow-lg
              height={"982"}
              alt=""
              layout="responsive"
              objectFit="contain"
              src={img}
            />
          </div>
        </a>

        <div className="h-full">
          <a href={github} target="_blank">
            <h1 className="text-3xl font-semibold hover:text-cyan-500 hover:underline">
              {title}
            </h1>
          </a>
          <p className="text-lg py-6">{description}</p>
          <span className="font-semibold pt-6">Built using:</span>
          <Skillset skills={using} card />
        </div>

        <div className="absolute lg:top-0 lg:right-0 top-2 right-2 flex items-center gap-3">
          <a href={github} target="_blank">
            <button className="p-2 bg-black bg-opacity-30 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-github h-6 w-6"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </button>
          </a>
          <a href={live} target="_blank">
            <button className="px-2 bg-red-500 rounded-md font-extrabold">
              LIVE
            </button>
          </a>
        </div>
      </div>
      {/* </Tilt> */}
    </AnimationOnScroll>
  );
};

export default Card;
