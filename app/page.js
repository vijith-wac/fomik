import Image from "next/image";
import styles from "./page.module.css";
import SignUpForm from "@/components/SignUpForm";
import SignUpFormTwo from "@/components/SignUpForm2";
import SignUpFormYup from "@/components/SignUpFormYup";
import SignUpFormYupTwo from "@/components/signUpFormYup2";

export default function Home() {
  return (
    <div>
      <h2>Fomik</h2>
      {/* <SignUpForm/> */}
      {/* <SignUpFormTwo/> */}
      {/* <SignUpFormYup/> */}
      <SignUpFormYupTwo/>
    </div>
  );
}
