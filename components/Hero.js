import dynamic from "next/dynamic";
const Typewriter = dynamic(() => import("typewriter-effect"));

const Hero = () => {
  return (
    <section id="start" className="w-full relative h-auto">
      <video
        id="background-video"
        className="brightness-50 z-10"
        autoPlay
        loop
        muted
        disablePictureInPicture
        poster={"/videos/poster.webp"}
        controls={false}
      >
        <source src={"/videos/axolotlbyte-compressed.webm"} type="video/webm" />
        <source src={"/videos/axolotlbyte-compressed.mp4"} type="video/mp4" />
      </video>
      <div
        title="welcome"
        className="absolute welcome text-white top-1/2 z-20 text-center overflow-hidden left-0 right-0"
      >
        <h1 className="text-6xl lg:text-8xl font-extrabold text-cyan-500">
          <Typewriter
            options={{
              strings: ["Hello!", "Hola!", "Nihao!", "Merhaba!", "Namaste!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <br />
        <p className="text-2xl font-semibold px-2 h-auto">
          I&apos;m Arzaan, I am a software developer and a digital experience
          designer.
          <br /> Weclome to{" "}
          <span className="text-cyan-500 font-semibold">axolotl</span>
          <span className="text-pink-500 font-semibold">byte</span>!
        </p>
      </div>
      <style jsx>{`
        .min-h-28 {
          min-height: 7rem /* 112px */;
        }
        #about-img {
          position: absolute;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
        }
        #background-video {
          width: 100%;
          height: 100vh;
          object-fit: cover;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          /* z-index: -1; */
        }
        .text-8xl {
          font-size: 5rem /* 48px */;
          line-height: 1;
        }
        .welcome {
          position: absolute;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          width: 90%; /* Need a specific value to work */
        }
      `}</style>
    </section>
  );
};

export default Hero;
