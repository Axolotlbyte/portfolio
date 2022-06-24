import Card from "../components/Card";
import Layout from "../components/Layout";
import Typewriter from "typewriter-effect";

export default function Home() {
  const links = [
    { label: "START" },
    { label: "WORK" },
    { label: "ABOUT" },
    { label: "CONTACT" },
  ];
  return (
    <Layout title={"axolotlbyte - Arzaan khan's Portfolio"}>
      <nav className="fixed top-6 right-6 h-screen z-50 text-teal-500">
        <ul className="grid gap-4 text-2xl">
          {links.map((link) => (
            <a key={link.label} href={`#${link.label.toLowerCase()}`}>
              <li
                key={link.label}
                className="flex items-center hover:text-pink-600 hover:scale-105 transition-transform cursor-pointer select-none font-semibold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="bi bi-dot w-6 h-6"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                </svg>
                {link.label}
              </li>
            </a>
          ))}
        </ul>
      </nav>
      <section id="start" className=" w-full relative ">
        <video
          id="background-video"
          className="brightness-50 z-10 "
          autoPlay
          loop
          muted
        >
          <source src={"/videos/axolotlbyte.mp4"} type="video/mp4" />
        </video>
        <div
          title="welcome"
          className="absolute welcome text-white top-1/2 z-20 text-center overflow-hidden left-0 right-0 selection:bg-pink-500"
        >
          <h1 className="text-6xl font-extrabold">
            <Typewriter
              options={{
                strings: ["Hello!", "Hola!", "Nihao!","Merhaba!","Namaste!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <br />
          <p className="text-lg">
            I&apos;m Arzaan khan, blah blah blah lorem ipsum dolor si amet.
          </p>
        </div>
        <section className="grid grid-cols-10"></section>
      </section>

      <section id="work">
        <Card />
        <Card reverse />
        <Card />
        <Card reverse />
        <Card />
        <Card reverse />
      </section>

      <section id="about" className="relative pt-24 mt-4 bg-white h-auto">
        <div
          id="about-img"
          className="absolute w-44 h-44 top-0 bg-yellow-500 rounded-full"
        ></div>
        <div className="w-full bg-cyan-700">
          <p className="h-56"></p>
        </div>
      </section>

      <section id="contact"></section>
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
          z-index: -1;
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
