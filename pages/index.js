import Card from "../components/Card";
import Layout from "../components/Layout";
import Typewriter from "typewriter-effect";
import Image from "next/image";
// import { useRef, useState, useEffect } from "react";
import StarsCanvas from "../components/StarsCanvas";
import NavList from "../components/NavList";

export default function Home() {
  // const [canvasHeight, setCanvasHeight] = useState(0);
  const links = [
    { label: "START" },
    { label: "WORK" },
    { label: "ABOUT" },
    { label: "CONTACT" },
  ];

  // const canvasHeightRef = useRef();

  // useEffect(() => {
  //   setCanvasHeight(canvasHeightRef.current.height);
  // }, []);

  const work = [
    {
      title: "Apollo - Stock Forecast App",
      image: "/work/site-apollo.webp",
      backgroundImage: "/work/galaxy-texture.webp",
    },
    {
      title: "Titanium - Blog",
      image: "/work/site-titanium.webp",
      backgroundImage: "/work/blog-texture.webp",
    },
    {
      title: "Your Dentist - Dental health service",
      image: "/work/site-dentist.webp",
      backgroundImage: "/work/dentist-texture.webp",
    },
  ];

  // const techs = [
  //   { src: "/technologies/javascript.svg", alt: "javascript" },
  //   { src: "/technologies/python.svg", alt: "python" },
  //   { src: "/technologies/react.svg", alt: "react" },
  //   { src: "/technologies/next.svg", alt: "next" },
  //   { src: "/technologies/nodejs.svg", alt: "nodejs" },
  //   { src: "/technologies/expressjs.svg", alt: "express" },
  //   { src: "/technologies/git.svg", alt: "git" },
  //   { src: "/technologies/anaconda.svg", alt: "anaconda" },
  //   { src: "/technologies/mongodb.svg", alt: "mongodb" },
  //   { src: "/technologies/postgre.svg", alt: "postgreSQL" },
  //   { src: "/technologies/tailwind.svg", alt: "tailwind" },
  // ];

  return (
    <Layout title={"axolotlbyte - Arzaan khan's Portfolio"}>
      <nav className="fixed top-6 right-6 h-auto z-50 text-teal-500">
        <ul className="grid gap-4 text-2xl">
          {links.map((link) => (
            <NavList key={link.label} label={link.label} />
          ))}
        </ul>
      </nav>

      {/* Start section */}
      <section id="start" className="w-full relative h-auto">
        <video
          id="background-video"
          className="brightness-50 z-10"
          autoPlay
          loop
          muted
          disablePictureInPicture
          poster={"/videos/poster.webp"}
        >
          <source
            src={"/videos/axolotlbyte-compressed.webm"}
            type="video/webm"
          />
          <source src={"/videos/axolotlbyte-compressed.mp4"} type="video/mp4" />
        </video>
        <div
          title="welcome"
          className="absolute welcome text-white top-1/2 z-20 text-center overflow-hidden left-0 right-0"
        >
          <h1 className="text-6xl font-extrabold">
            <Typewriter
              options={{
                strings: ["Hello!", "Hola!", "Nihao!", "Merhaba!", "Namaste!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <br />
          <p className="text-lg px-2 h-auto">
            I&apos;m Arzaan, a software developer and digital experience designer
          </p>
        </div>
        <section></section>
      </section>

      {/* Work section */}
      <section id="work">
        <div className="w-full grid mx-auto md:w-full h-auto relative text-white">
          {work.map((item) => (
            <Card
              key={item.title}
              backgroundImage={item.backgroundImage}
              image={item.image}
            />
          ))}
        </div>
      </section>

      {/* Stars Background */}
      <StarsCanvas>
        {/* About section */}
        <section
          id="about"
          className="relative mt-4 h-auto bg-transparent text-white p-6"
        >
          <section title="me" className="flex items-center gap-2">
            <div
              title="Arzaan khan"
              className="flex-shrink-0 w-40 h-40 md:w-44 md:h-44 bg-violet-600 rounded-full"
            ></div>
            <p className="text-5xl font-bold ">Arzaan khan</p>
          </section>

          <div className="w-full bg-transparent py-4">
            <p className="w-full md:w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              neque justo, condimentum in dapibus at, pulvinar et ipsum. Donec
              sodales nec magna ut feugiat. Morbi facilisis hendrerit lobortis.
              Mauris imperdiet lectus bibendum hendrerit vehicula. Maecenas
              porttitor pulvinar magna, non fringilla tortor aliquet id. Quisque
              vitae tellus lacus. Suspendisse augue ipsum, eleifend a sagittis
              sed, tincidunt quis justo. Nam eros purus, pellentesque sed
              lobortis in, egestas sed dolor. Duis dignissim, urna id tincidunt
              eleifend, tellus ipsum pulvinar nisi, et pulvinar diam risus sed
              mauris. Donec viverra posuere nibh sed efficitur. Cras venenatis,
              eros quis semper facilisis, nisi orci convallis sem, quis
              ullamcorper dui mauris non risus. Mauris eget sapien nec turpis
              pretium tincidunt et id massa. Proin rhoncus maximus purus a
              dapibus. Nunc sed facilisis dolor.
            </p>
          </div>
          {/* <section title="technologies" className="flex ">
            {techs.map((item) => (
              <div
                key={item.alt}
                className="relative h-8 md:h-12  w-auto flex items-center justify-center"
              >
                <Image
                  title={item.alt}
                  alt={item.alt}
                  layout="fill"
                  src={item.src}
                />
              </div>
            ))}
          </section> */}
        </section>

        {/* Contact section */}
        <section
          id="contact"
          className="flex flex-col md:flex-row justify-between relative w-full p-6 bg-opactiy-0 divide-y md:divide-y-0 md:divide-x text-white"
        >
          <div className="w-1/2 pb-2">
            <h1 className="text-3xl font-semibold">
              Let&apos;s Connect & Build Something Together!{" "}
            </h1>
            <p className="text-lg pt-2 pr-2 text-gray-400">
              Lorem ipsum dolor si amet. Du dora Hola soy amoy di vor bonjour
              bonseuis hola amirv faskiet dlare
            </p>
          </div>
          <div className="grid gap-2 w-full md:w-1/2 md:px-6 pb-2">
            <h1 className="text-3xl font-semibold text-cyan-500">Contact</h1>

            <input
              type="text"
              className="w-full h-8 px-4 rounded-sm border border-cyan-500 bg-inherit"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="w-full h-8 px-4 rounded-sm border border-cyan-500 bg-inherit"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full h-8 px-4 rounded-sm border border-cyan-500 bg-inherit"
              placeholder="Subject"
            />
            <textarea className="w-full px-4 pt-2 rounded-sm border border-cyan-500 bg-inherit" />
            <button className="cursor-pointer w-full bg-gradient-to-r from-cyan-500 to-teal-500 h-8 font-semibold rounded-sm">
              Submit
            </button>
          </div>
        </section>
      </StarsCanvas>
      <style jsx>{`
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
        .text-6xl {
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
    </Layout>
  );
}
