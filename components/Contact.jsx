import { Button, Input, Textarea, TextInput } from "@mantine/core";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-center">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="w-[60%] flex flex-col items-center  mx-auto space-y-4"
      >
        <TextInput
          className="w-full"
          placeholder="your name"
          label="Full name"
          required
        />
        <TextInput
          placeholder="abc@gmail.com"
          className="w-full"
          label="Your Email"
          type="email"
          required
        />
        <TextInput
          className="w-full"
          placeholder="564556456465"
          label="Phone Number"
          required
          // error="this is  not a valid phone number"
          type="tel"
        />

        <Textarea
          className="w-full"
          label="Your Message"
          required
          placeholder="Message"
        />
        <button className="px-20 py-3 text-white font-bold  rounded-md bg-red-600">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
