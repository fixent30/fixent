const Hero = () => {
  return (
    <div
      name="Hero"
      className="flex flex-col items-center text-center space-y-4"
    >
      <h1 className="text-[#0f364b] -leading-5  md:text-5xl md:leading-[1.3]   text-3xl font-bold">
        One Place for All your Reparing Solutions
      </h1>
      <p className="text-gray-600 -leading-5 ">
        Fixent is a Reparing Shop for all your needs like Laptops, desktops and
        mobile phone etc.
      </p>
      <div className="w-full">
        <img
          src="/hero.jpg"
          className="rounded-md lg:w-[80%] mx-auto max-h-[400px] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
