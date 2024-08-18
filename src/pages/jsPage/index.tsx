import React, { useEffect, useState } from "react";

import styles from "./jsPage.module.scss";
import SyntaxHighlighter from "react-syntax-highlighter";
import CopyToClipboard from "react-copy-to-clipboard";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { CheckIcon, CopyIcon } from "../../icons";
import { useSelector } from "react-redux";
import { RootState } from "../../slice/RootReducer";
import { useDispatch } from "react-redux";
import { jsCheatSheetDataRequest } from "../../slice/jsCheatSheetSlice";
import { JSGuide, Snippet } from "../../models/models";

const JSPage = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});

  const jsCheatSheetData = useSelector(
    (state: RootState) => state.jsCheatSheet.jsCheatSheetDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jsCheatSheetDataRequest());
  }, [dispatch]);

  const handleCopy = (index: number) => {
    setCopied((prevState) => ({ ...prevState, [index]: true }));
    setTimeout(() => {
      setCopied((prevState) => ({ ...prevState, [index]: false }));
    }, 2000);
  };

  const gridContent = (item: JSGuide) => (
    <>
      {item.snippets.map((snippet: Snippet) => (
        <div key={snippet.id} className={styles["grid-content"]}>
          <h5>{snippet.title}</h5>
          <p>{snippet.description}</p>
          {snippet.code && (
            <div className={styles["command-container"]}>
              <SyntaxHighlighter language="bash" style={darcula}>
                {snippet.code}
              </SyntaxHighlighter>
              <CopyToClipboard
                text={snippet.code}
                onCopy={() => handleCopy(snippet.id)}
              >
                <span className={styles["copy-button"]}>
                  {copied[snippet.id] ? <CopyIcon /> : <CheckIcon />}
                </span>
              </CopyToClipboard>
            </div>
          )}
          {snippet.content && (
            <div dangerouslySetInnerHTML={{ __html: snippet.content }} />
          )}
        </div>
      ))}
    </>
  );

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
          {jsCheatSheetData?.jsGuide?.map((item: JSGuide) => (
            <div key={item.id} className={styles["first-topic"]}>
              <h4 className={styles["topic"]}>{item.topic}</h4>
              <div className={styles["grid-container"]}>
                {gridContent(item)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JSPage;
