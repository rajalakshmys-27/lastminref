import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../slice/RootReducer";
import styles from "./homePage.module.scss";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const languages = useSelector(
    (state: RootState) => state.languages.languages
  );

  const linkName = (language: string) => {
    return language.toLowerCase().replace(" ", "-");
  };

  return (
    <div className={styles["home-wrapper"]}>
      <div className={styles["home-content"]}>
        <section className={styles["description"]}>
          <h1>LastMinRef</h1>
          <p>
            LastMinRef is your go-to resource for learning and mastering
            programming languages and frameworks.
          </p>
        </section>
        <section className={styles["languages"]}>
          <h2>Available Languages:</h2>
          <ul className={styles["language-list"]}>
            {languages.map((language: string, index: number) => (
              <li key={index} className={styles["language-item"]}>
                <Link to={`/${linkName(language)}`}>
                  <p>{language}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
