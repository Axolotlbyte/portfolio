import dynamic from "next/dynamic";
import Card from "../components/Card";
// import Layout from "../components/Layout";
// import Typewriter from "typewriter-effect";
const Layout = dynamic(() => import("../components/Layout"));
// const NavList = dynamic(() => import("../components/NavList"))
// const Work = dynamic(() => import("../components/work/Work"))
const StarsCanvas = dynamic(() => import("../components/canvas/StarsCanvas"));
// const Hero = dynamic(() => )
// import Image from "next/image";
// import { useRef, useState, useEffect } from "react";
import Hero from "../components/Hero";
// import StarsCanvas from "../components/canvas/StarsCanvas";
import Work from "../components/work/Work";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

export default function Home() {
  // const [canvasHeight, setCanvasHeight] = useState(0);

  // const canvasHeightRef = useRef();

  // useEffect(() => {
  //   setCanvasHeight(canvasHeightRef.current.height);
  // }, []);

  // const work = [
  //   {
  //     title: "Apollo - Stock Forecast App",
  //     image: "/work/site-apollo.webp",
  //     backgroundImage: "/work/galaxy-texture.webp",
  //     heading: "Highly Efficient Code And Functional Design",
  //     description:
  //       "Optimised code that provides best performance to the user and is built upto the modern standards to increase User satisfaction ",
  //   },
  //   {
  //     title: "Titanium - Blog",
  //     image: "/work/site-titanium.webp",
  //     backgroundImage: "/work/blog-texture.webp",
  //     heading: "Beautiful Design Paired With Best SEO Practices",
  //     description:
  //       "Search engine optimisation practices that set you apart from 70% of the businesses out there. Get a site that is Optimised to rank better on the web.",
  //   },
  //   {
  //     title: "Your Dentist - Dental health service",
  //     image: "/work/site-dentist.webp",
  //     backgroundImage: "/work/dentist-texture.webp",
  //     heading: "Elegant User Experience inspired By Modern Design",
  //     description:
  //       "Stylish Designs that enhance User Experience and add a look of professionalism to the product.",
  //   },
  // ];

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

  // const services = [
  //   {
  //     title: "Portfolio website",
  //     icon: "/work/portfolio.svg",
  //     description:
  //       "Get yourself a professional web portfolio designed with style.",
  //   },
  //   {
  //     title: "Blog website",
  //     icon: "/work/blog.svg",
  //     description:
  //       "Get a personal blog built according to your needs and designed to appeal to the masses.",
  //   },
  //   {
  //     title: "Business website",
  //     icon: "/work/shop.svg",
  //     description:
  //       "Get a business website made using scalable technology and best industry wide practices.",
  //   },
  // ];

  return (
    <Layout title={"axolotlbyte - Arzaan khan's Portfolio"}>
      {/* Start section */}
      <Hero />

      {/* About section */}
      <About />
      {/* Work & Education*/}
      <Work />

      <Projects />

      {/* Work section */}
      {/* <section id="work">

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
      </section> */}

      {/* Stars Background */}
      <StarsCanvas>
        {/* Contact section */}
        <Contact />
      </StarsCanvas>
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
