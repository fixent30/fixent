import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();
  const onSubmit = (data) => {
    resetField("fullname");
    resetField("email");
    resetField("telephone");
    resetField("message");
    console.log(data);
  };
  return (
    <div name="Contact" className="my-4">
      <h2 className="text-center font-bold lg:text-2xl  text-xl">Contact me</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:w-[80%] mx-auto w-full space-y-2 items-center"
      >
        <div className="inputContainer">
          <label htmlFor="name">Full Name</label>
          <input
            className=""
            type="text"
            {...register("fullname", { required: true })}
          />
          {errors.fullname && (
            <span className="text-sm text-red-500">This field is required</span>
          )}
        </div>
        <div className="inputContainer">
          <label htmlFor="email">Email address</label>
          <input type="email" {...register("email", { required: true })} />
        </div>
        <div className="inputContainer">
          <label htmlFor="telephone">Telephone</label>
          <input
            type="tel"
            {...register("telephone", {
              required: {
                value: true,
                message: "phone number is Required",
              },
              maxLength: {
                value: 10,
                message: "phone number should be of 10 degits",
              },
            })}
          />
          {errors.telephone && <span>{errors.telephone}</span>}
        </div>
        <div className="flex flex-col w-[95%] space-y-2 items-center">
          <label htmlFor="message">Message</label>
          <textarea
            {...register("message", { required: true })}
            className="w-full focus:outline-none bg-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-[#ee2b55]  px-8 py-2 rounded-md text-white font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
