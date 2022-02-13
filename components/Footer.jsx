const Footer = () => {
  return (
    <footer className="w-full flex flex-col  items-center h-auto bg-gray-800 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <img src="/logo.png" className="h-32  w-32 lg:w-64 lg:h-64" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.769106514028!2d88.7272307154413!3d26.527549382950003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4794097acc1c3%3A0xb08f61024e7d83cc!2sSaptarshi%20Apartment%2C%20Jalpaiguri%2C%20West%20Bengal%20735101!5e0!3m2!1sen!2sin!4v1644064692101!5m2!1sen!2sin"
          width="400"
          height="300"
          className="border-0 rounded-sm m-4"
          loading="lazy"
        ></iframe>
      </div>
      <h2 className="my-2 text-white font-bold text-lg">
      fixentrepairjalpaiguri@gmail.com
    </h2>
    </footer>
  );
};

export default Footer;
