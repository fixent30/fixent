import { useState } from "react";
import { Input, Modal } from "@mantine/core";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/router";

const SignInForm = ({ opened, setOpened }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const router = useRouter();

  const SignInGoogle = () => {
    signInWithGoogle();
    router.push("/");
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Sign In Form"
    >
      <Input
        my="md"
        onChange={(e) => setEmail(e.target.value)}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        }
        placeholder="Enter your email"
      />
      <Input
        onChange={(e) => setPassword(e.target.value)}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        }
        my="md"
        type="password"
        placeholder="Enter your password"
      />
      <button
        onClick={() => signInWithEmailAndPassword(email, password)}
        className="bg-[#ee2b55] mx-auto w-full px-8 py-2 text-white font-bold rounded-2xl"
      >
        Log in
      </button>
      <button
        onClick={() => SignInGoogle()}
        className="w-full flex items-center shadow-md justify-center space-x-4  my-4 border px-8 rounded-2xl font-bold py-2"
      >
        <img
          className="w-6 h-6"
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
        />
        <p>Sign In With Google</p>{" "}
      </button>
    </Modal>
  );
};

export default SignInForm;
