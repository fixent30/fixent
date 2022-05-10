import { useState } from "react";
import { Textarea, TextInput } from "@mantine/core";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://l674j9rggb.execute-api.ap-south-1.amazonaws.com/dev",
      {
        name: name,
        email: email,
        phoneNumber: phone,
        message: message,
      }
    );
    toast.success("Message Submitted Successfully");
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Full name"
          name="name"
          required
        />
        <TextInput
          placeholder="abc@gmail.com"
          className="w-full"
          onChange={(e) => setEmail(e.target.value)}
          label="Your Email"
          value={email}
          type="email"
          name="email"
          required
        />
        <TextInput
          className="w-full"
          placeholder="564556456465"
          label="Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="phone"
          type="tel"
        />

        <Textarea
          className="w-full"
          label="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
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
