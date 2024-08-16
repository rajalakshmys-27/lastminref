import React, { useState } from "react";

import styles from "./jsPage.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import CopyToClipboard from "react-copy-to-clipboard";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CheckIcon, CopyIcon } from "../../icons";

const JSPage = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});

  const handleCopy = (index: number) => {
    setCopied((prevState) => ({ ...prevState, [index]: true }));
    setTimeout(() => {
      setCopied((prevState) => ({ ...prevState, [index]: false }));
    }, 2000);
  };
  return (
    <div className={styles["js-wrapper"]}>
      <div className={styles["js-page"]}>
        <div className={styles["js-header"]}>
          <h1>JavaScript Topics</h1>
          <p>
            A handy reference guide featuring key JavaScript concepts,
            functions, and techniques for efficient and quick coding.
          </p>
        </div>
        <div className={styles["js-content"]}>
          <div className={styles["first-topic"]}>
            <h4 className={styles["topic"]}>
              3 Ways to Make API calls in Javascript
            </h4>
            <div className={styles["grid-container"]}>
              <div className={styles["grid-content"]}>
                <h5>1. Using the Fetch API</h5>
                <p>
                  The Fetch API is a modern, promise-based mechanism to make
                  asynchronous requests to servers. It's a part of the window
                  object in browsers.
                </p>

                <div className={styles["command-container"]}>
                  <SyntaxHighlighter language="bash" style={darcula}>
                    {`fetch('https://api.example.com/data')\n     .then(response => response.json())\n     .then(data => console.log(data))\n     .catch(error => console.error('There was an error!', error));`}
                  </SyntaxHighlighter>
                  <CopyToClipboard
                    text={`fetch('https://api.example.com/data')\n     .then(response => response.json())\n     .then(data => console.log(data))\n     .catch(error => console.error('There was an error!', error));`}
                    onCopy={() => handleCopy(1)}
                  >
                    <span className={styles["copy-button"]}>
                      {copied[1] ? <CopyIcon /> : <CheckIcon />}
                    </span>
                  </CopyToClipboard>
                </div>
              </div>
              <div className={styles["grid-content"]}>
                <h5>1. Using the Fetch API</h5>
                <p>
                  The Fetch API is a modern, promise-based mechanism to make
                  asynchronous requests to servers. It's a part of the window
                  object in browsers.
                </p>

                <div className={styles["command-container"]}>
                  <SyntaxHighlighter language="bash" style={darcula}>
                    {`fetch('https://api.example.com/data')\n     .then(response => response.json())\n     .then(data => console.log(data))\n     .catch(error => console.error('There was an error!', error));`}
                  </SyntaxHighlighter>
                  <CopyToClipboard
                    text={`fetch('https://api.example.com/data')\n     .then(response => response.json())\n     .then(data => console.log(data))\n     .catch(error => console.error('There was an error!', error));`}
                    onCopy={() => handleCopy(1)}
                  >
                    <span className={styles["copy-button"]}>
                      {copied[1] ? <CopyIcon /> : <CheckIcon />}
                    </span>
                  </CopyToClipboard>
                </div>
              </div>
              <div className={styles["grid-content"]}>
                <h5>1. Using the Fetch API</h5>
                <p>
                  The Fetch API is a modern, promise-based mechanism to make
                  asynchronous requests to servers. It's a part of the window
                  object in browsers.
                </p>

                <div className={styles["command-container"]}>
                  <SyntaxHighlighter language="bash" style={darcula}>
                    {`fetch('https://api.example.com/data')\n     .then(response => response.json())\n     .then(data => console.log(data))\n     .catch(error => console.error('There was an error!', error));`}
                  </SyntaxHighlighter>
                  <CopyToClipboard
                    text={`fetch('https://api.example.com/data')\n     .then(response => response.json())\n     .then(data => console.log(data))\n     .catch(error => console.error('There was an error!', error));`}
                    onCopy={() => handleCopy(1)}
                  >
                    <span className={styles["copy-button"]}>
                      {copied[1] ? <CopyIcon /> : <CheckIcon />}
                    </span>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSPage;
