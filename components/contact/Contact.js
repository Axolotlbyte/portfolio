import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll/dist/js/components";
import SectionWrapper from "../SectionWrapper";
import EarthCanvas from "../canvas/EarthCanvas";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "arjaankhan",
          from_email: form.email,
          to_email: "arjaankhan@gmail.com",
          message: form.message,
        },
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          EMAILJS_PUBLIC_KEY;
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <AnimationOnScroll
        className="relative w-full h-auto mx-auto"
        animateIn="animate__fadeInLeft"
        animateOnce
      >
        <SectionWrapper
          id={"contact"}
          title={"Contact."}
          subtitle={"Get in touch"}
        >
          <form
            // ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8 bg-black p-8 rounded-xl bg-opacity-75"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                // value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-gray-800 w-full py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-gray-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-gray-800 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-blue-600 right py-3 px-8 rounded-xl outline-none w-fit text-white font-bold"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </SectionWrapper>
      </AnimationOnScroll>

      <AnimationOnScroll
        className="relative w-full h-auto mx-auto"
        animateIn="animate__fadeInRight"
        animateOnce
      >
        <EarthCanvas />
      </AnimationOnScroll>
    </div>
  );
};

export default Contact;
