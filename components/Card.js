import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import Image from "next/image";

const Card = ({ backgroundImage, title, image }) => {
  return (
    <div
      style={{ backgroundImage: `url("${backgroundImage}")` }}
      className="w-full relative overflow-hidden h-auto bg-fixed bg-cover py-8 flex flex-col-reverse md:flex-row gap-6 px-6 "
    >
      <div className="w-full md:w-2/5">
        <h1 className="text-5xl font-bold">Title of this bit ofcourse</h1>
        <p className="text-lg text-gray-200 pt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque
          justo, condimentum in dapibus at, pulvinar et ipsum. Donec sodales nec
          magna ut feugiat. Morbi facilisis hendrerit lobortis. Mauris imperdiet
          lectus bibendum hendrerit vehicula. Maecenas porttitor pulvinar magna,
          non fringilla tortor aliquet id. Quisque vitae tellus lacus.
          Suspendisse augue ipsum, eleifend a sagittis sed, tincidunt quis
          justo. Nam eros purus, pellentesque sed lobortis in, egestas sed
          dolor. Duis dignissim, urna id tincidunt eleifend, tellus ipsum
          pulvinar nisi, et pulvinar diam risus sed mauris. Donec viverra
          posuere nibh sed efficitur. Cras venenatis, eros quis semper
          facilisis.
        </p>
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
