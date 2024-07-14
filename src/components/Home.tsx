import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../slice/RootReducer";
import "./Home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const languages = useSelector(
    (state: RootState) => state.languages.languages
  );


  const linkName = (language: string) => {
    return language.toLowerCase().replace(" ", "-");
  };

  return (
    <div className="App">
      <section className="description">
        <h1>Study Site</h1>
        <p>
          Study Site is your go-to resource for learning and mastering
          programming languages and frameworks.
        </p>
      </section>
      <section className="languages">
        <h2>Available Languages:</h2>
        <ul className="language-list">
          {languages.map((language: string, index: number) => (
            <li key={index} className="language-item">
              <Link to={`/${linkName(language)}`}>
                <p>{language}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
