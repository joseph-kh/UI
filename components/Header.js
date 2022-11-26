import React from "react";
import styles from "@styles/Header.module.css";
import Image from "next/image";

const Header = (props) => {
  const { title, subtitle } = props;

  return (
    <div>
      <Image
        src="/svgs/logo.svg"
        className={styles.logo}
        width={40}
        height={32}
        alt="logo"
      />
      <h1 className={styles.headerTitle}>{title}</h1>
      {subtitle && <h2 className={styles.headerSubTitle}>{subtitle}</h2>}
    </div>
  );
};

export default Header;
