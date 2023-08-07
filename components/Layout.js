import Head from "next/head";
import Image from "next/image";
import Navigation from "./navigation/Navigation";
import { Analytics } from "@vercel/analytics/react";
import { iconLinks } from "../constants";

export default function Layout({ children, title }) {
  return (
    <div className="selection:bg-pink-500 text-white selection:text-white">
      <Head>
        {/* <html lang="en" /> */}
        <title>{title}</title>
        <meta
          name="description"
          content="Welcome to axolotlbyte, Check out my Portfolio or Hire me for a web project. Click on the blue words to get started! "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-auto h-auto z-20 pb-2 absolute top-20 left-6 select-none text-3xl md:text-5xl font-bold header-text overflow-visible">
        axolotlbyte
      </header>

      <div className="w-full h-auto bg-black flex items-center justify-center ">
        <div className="overflow-hidden w-36 md:w-48 relative pt-2 flex-grow-0">
          <Image
            src={"/assets/bismillah.webp"}
            width={"1600"}
            height={"517"}
            alt=""
            layout="responsive"
            objectFit="contain"
          />
        </div>
      </div>

      <main>
        <Navigation />
        {children}
        <Analytics />
      </main>

      <footer className="w-full mx-auto h-11 flex items-center justify-between bg-black">
        <span className="text-white text-xl font-semibold ml-4 flex">
          {iconLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </span>
        <a
          className="w-auto"
          href={"https://github.com/Axolotlbyte"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-white font-semibold mr-4 flex items-center cursor-pointer">
            <span>@axolotlbyte</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-github h-6 w-6 ml-2"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </div>
        </a>
      </footer>
      <style jsx>{`
        .footer-anim {
          background: linear-gradient(
            39deg,
            rgba(25, 123, 120, 1) 9%,
            rgba(28, 163, 158, 1) 32%,
            rgba(144, 232, 221, 1) 42%,
            rgba(212, 254, 233, 1) 45%,
            rgba(144, 232, 221, 1) 49%,
            rgba(28, 163, 158, 1) 56%,
            rgba(25, 123, 120, 1) 87%
          );
          background-size: 600% 600%;
          -webkit-animation: Gradient 16s ease infinite;
          -moz-animation: Gradient 16s ease infinite;
          animation: Gradient 16s ease infinite;
        }

        @-webkit-keyframes Gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @-moz-keyframes Gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes Gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .header-text {
          background: #06b6d4;
          background: linear-gradient(to right, #06b6d4 0%, #ec4899 75%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
