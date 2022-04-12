import { Button } from "@mantine/core";
import { useClipboard } from "@mantine/hooks";

const Footer = () => {
  const clipboard = useClipboard({ timeout: 500 });
  return (
    <footer className="w-full flex flex-col  items-center h-auto bg-gray-800 overflow-hidden">
      <div className="w-full flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.png" className="h-32  w-32 lg:w-64 lg:h-64" />
          <div>
            <h3 className="text-white font-bold text-2xl leading-normal">
              Ground floor, Saptarshi Apartment,
              <br /> Newtown Para , near 4 No Ghumti
              <br /> Jalpaiguri ,West Bengal 735101
            </h3>
            <div className="flex items-center my-4 space-x-5">
              <img src="/phone.svg" />
              <p className="text-white font-bold">+91 9800090116</p>
              <Button
                color={clipboard.copied ? "teal" : "blue"}
                onClick={() => clipboard.copy("+91 9800090116")}
              >
                <img src="/bx_copy.svg" />
              </Button>
            </div>
            <div className="flex items-center my-4 space-x-5">
              <img src="/email.svg" />
              <p className="text-white font-bold">
                fixentrepairjalpaiguri@gmail.com
              </p>
              <Button
                color={clipboard.copied ? "teal" : "blue"}
                onClick={() =>
                  clipboard.copy(" fixentrepairjalpaiguri@gmail.com")
                }
              >
                <img src="/bx_copy.svg" />
              </Button>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.9045261683013!2d88.71209501503674!3d26.523194883296924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe258fad057cb031b!2zMjbCsDMxJzIzLjUiTiA4OMKwNDInNTEuNCJF!5e0!3m2!1sen!2sin!4v1646139202384!5m2!1sen!2sin"
          width="400"
          height="300"
          className="border-0 rounded-sm m-4"
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
