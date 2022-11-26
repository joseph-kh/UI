import React from "react";
import styles from "@styles/Nav.module.css";
import Cookies from "js-cookie";
import { useLoader } from "@contexts/LoaderContext";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const { setIsLoading } = useLoader();

  const logoutHandler = async () => {
    setIsLoading(true);
    Cookies.remove("access_token");
    router.push("/login").finally(() => setIsLoading(false));
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        <li>
          <a onClick={logoutHandler}>Logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
