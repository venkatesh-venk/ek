import Image from "next/image";
import styles from "./Logo.module.css";
import logo from "../public/images/logo.png";

export default function Logo() {
  return (
    <Image
      src={logo}
      alt="ESIKA INFOTECH"
      className={styles.logo}
      priority
    />
  );
}
