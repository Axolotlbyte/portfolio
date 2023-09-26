const SectionWrapper = ({ id, subtitle, title, children, img, extraStyles }) => {
  return (
    <section
      id={id}
      className={"w-full p-6 lg:p-24 min-h-screen bg-no-repeat bg-cover bg-center overflow-hidden " + extraStyles}
      style={{ backgroundImage: `url(${img})` }}
    >
      <p className="text-lg lg:text-xl font-light">{subtitle}</p>
      <h1 className="text-5xl lg:text-6xl font-bold pb-1">{title}</h1>
      {children}
    </section>
  );
};

export default SectionWrapper;
