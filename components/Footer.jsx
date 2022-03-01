const Footer = () => {
  return (
    <footer className="w-full flex flex-col  items-center h-auto bg-gray-800 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <img src="/logo.png" className="h-32  w-32 lg:w-64 lg:h-64" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.9045261683013!2d88.71209501503674!3d26.523194883296924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe258fad057cb031b!2zMjbCsDMxJzIzLjUiTiA4OMKwNDInNTEuNCJF!5e0!3m2!1sen!2sin!4v1646139202384!5m2!1sen!2sin"
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
