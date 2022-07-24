import dynamic from "next/dynamic";
import Card from "../components/Card";
// import Layout from "../components/Layout";
// import Typewriter from "typewriter-effect";
const Layout = dynamic(() => import("../components/Layout"));
const Typewriter = dynamic(() => import("typewriter-effect"));
// const NavList = dynamic(() => import("../components/NavList"))
// const StarsCanvas = dynamic(() => import("../components/StarsCanvas"))
// import Image from "next/image";
// import { useRef, useState, useEffect } from "react";
import StarsCanvas from "../components/StarsCanvas";
import NavList from "../components/NavList";
import ServiceCard from "../components/ServiceCard";

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
      heading: "Highly Efficient Code And Functional Design",
      description:
        "Optimised code that provides best performance to the user and is built upto the modern standards to increase User satisfaction ",
    },
    {
      title: "Titanium - Blog",
      image: "/work/site-titanium.webp",
      backgroundImage: "/work/blog-texture.webp",
      heading: "Beautiful Design Paired With Best SEO Practices",
      description:
        "Search engine optimisation practices that set you apart from 70% of the businesses out there. Get a site that is Optimised to rank better on the web.",
    },
    {
      title: "Your Dentist - Dental health service",
      image: "/work/site-dentist.webp",
      backgroundImage: "/work/dentist-texture.webp",
      heading: "Elegant User Experience inspired By Modern Design",
      description:
        "Stylish Designs that enhance User Experience and add a look of professionalism to the product.",
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

  const services = [
    {
      title: "Portfolio website",
      icon: "/work/portfolio.svg",
      description:
        "Get yourself a professional web portfolio designed with style.",
    },
    {
      title: "Blog website",
      icon: "/work/blog.svg",
      description:
        "Get a personal blog built according to your needs and designed to appeal to the masses.",
    },
    {
      title: "Business website",
      icon: "/work/shop.svg",
      description:
        "Get a business website made using scalable technology and best industry wide practices.",
    },
  ];

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
          controls={false}
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
            I&apos;m Arzaan, I am a software developer and a digital experience
            designer.
            <br /> Weclome to{" "}
            <span className="text-cyan-500 font-semibold">axolotl</span>
            <span className="text-pink-500 font-semibold">byte</span>!
          </p>
        </div>
        <section></section>
      </section>

      {/* Work section */}
      <section id="work">
        {/* Promotional Cards */}
        <div className="w-full grid mx-auto md:w-full h-auto relative text-white">
          {work.map((item) => (
            <Card
              key={item.title}
              backgroundImage={item.backgroundImage}
              image={item.image}
              heading={item.heading}
              description={item.description}
            />
          ))}
        </div>
        {/* Services */}
        <section
          style={{ backgroundImage: `url("/work/service-texture.webp")` }}
          className="h-auto w-full bg-fixed bg-cover"
        >
          <h1 className="text-4xl text-center w-full underline underline-offset-8 py-2 font-bold text-cyan-500">
            SERVICES
          </h1>
          <div className="w-full h-auto flex flex-col items-stretch md:flex-row justify-center gap-6 p-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </section>
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
              Born and Raised in India, He is currently pursuing a
              bachelor&apos;s degree in Computer Science. Specialising in
              software development with his Detail-Oriented designing
              techniques.
              <br className="py-1 block" />
              <br/>
              He has aquired a wide range of skills including leading
              technologies in development and excellent ability to grasp
              concepts and retain new information.
              <br className="py-1 block" />
              <br/>
              His main skillset consists of - Javascript, Python, Sql, React,
              Nodejs, Express.
              <br className="py-1 block" />
              <br/>
              When Arzaan isn&apos;t working hard at some project, you&apos;ll
              find him enjoying sketching and digital painting.
            </p>
          </div>
          <section title="skillset" className="py-2 w-full md:w-1/2">
            <h1 className="text-4xl font-semibold pb-2">Skillset</h1>

              <div title="javascript" className="p-1 rounded-sm bg-black px-2 font-medium text-white w-min inline-block mr-2 mb-2">
                Javascript
              </div>
              <div title="python" className="p-1 rounded-sm bg-black px-2 font-medium text-white w-min inline-block mr-2 mb-2">
                Python
              </div>
              <div title="python" className="p-1 rounded-sm bg-black px-2 font-medium text-white w-min inline-block mr-2 mb-2">
                SQL
              </div>
              <div title="react" className="p-1 rounded-sm bg-black px-2 font-medium text-white w-min inline-block mr-2 mb-2">
                React.js
              </div>
              <div title="next.js" className="p-1 rounded-sm bg-black px-2 font-medium text-white w-min inline-block mr-2 mb-2">
                Next.js
              </div>
              <div title="TailwindCSS" className="p-1 rounded-sm bg-black px-2 font-medium text-white w-min inline-block mr-2 mb-2">
                TailwindCSS
              </div>
              <div title="Bootstrap" className="p-1 rounded-sm bg-black px-2 font-medium text-white w-min inline-block mr-2 mb-2">
                Bootstrap
              </div>
              <div title="nodejs" className="p-1 rounded-sm bg-black px-2 font-medium text-white w-min inline-block mr-2 mb-2">
                Nodejs
              </div>
              <div title="Expressjs" className="p-1 rounded-sm bg-black px-2 font-medium text-white w-min inline-block mr-2 mb-2">
                Expressjs
              </div>
              <div title="PostgreSQL" className="p-1 rounded-sm bg-black px-2 font-medium text-white w-min inline-block mr-2 mb-2">
                PostgreSQL
              </div>
              <div title="Mongodb" className="p-1 rounded-sm bg-black px-2 font-medium text-white w-min inline-block mr-2 mb-2">
                MongoDB
              </div>
          </section>
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
          <div className="w-full md:w-1/2 pb-2">
            <h1 className="text-3xl font-semibold">
              Let&apos;s Connect & Build Something Together!{" "}
            </h1>
            <p className="text-lg pt-2 pr-2 text-gray-400">
              I am always excited to build something new. Let&apos; connect and
              we can bring your ideas to reality!
              <br />
              <span className="pt-4 flex items-center justify-start gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokelinejoin="round"
                  className="feather feather-mail mt-1"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>{" "}
                :
                <a
                  className="underline text-cyan-500"
                  href="mailto:arzaan@axolotlbyte.com"
                >
                  arzaan@axolotlbyte.com
                </a>
              </span>
            </p>
          </div>
          <div className="grid gap-2 w-full md:w-1/2 md:px-6 py-2">
            <h1 className="text-3xl font-semibold text-cyan-500">Contact</h1>

            <input
              type="text"
              className="w-full h-8 px-4 rounded-sm border border-cyan-500 bg-inherit focus:ring-1 ring-pink-500 outline-none focus:border-pink-500"
              placeholder="Full Name"
            />
            <input
              type="email"
              className="w-full h-8 px-4 rounded-sm border border-cyan-500 bg-inherit focus:ring-1 ring-pink-500 outline-none focus:border-pink-500"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full h-8 px-4 rounded-sm border border-cyan-500 bg-inherit focus:ring-1 ring-pink-500 outline-none focus:border-pink-500"
              placeholder="Subject"
            />
            <textarea
              placeholder="Describe your problem in breif..."
              className="w-full px-4 pt-2 rounded-sm border min-h-28 border-cyan-500 bg-inherit focus:ring-1 ring-pink-500 outline-none focus:border-pink-500"
            />
            <button className="cursor-pointer w-full bg-gradient-to-r from-cyan-500 to-teal-500 h-8 font-semibold rounded-sm">
              Submit
            </button>
          </div>
        </section>
      </StarsCanvas>
      <style jsx>{`
        .min-h-28{
          min-height: 7rem/* 112px */;
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
