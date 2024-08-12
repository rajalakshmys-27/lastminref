import React, { useEffect, useState } from "react";
import styles from "./cssPage.module.scss";
import FlexGridContent from "../../components/flexgrid";
import { useDispatch } from "react-redux";
import { cssCheatSheetDataRequest } from "../../slice/cssCheatSheetSlice";

const CSSPage = () => {
  const [selectedTopic, setSelectedTopic] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cssCheatSheetDataRequest({ selectedTopic }));
  }, [dispatch, selectedTopic]);

  return (
    <div className={styles["css-wrapper"]}>
      <div className={styles["css-page"]}>
        <div className={styles["css-header"]}>
          <h1>CSS Topics</h1>
          <p>
            A concise reference guide with essential CSS properties and
            techniques for quick and efficient styling.
          </p>
        </div>
        <div className={styles["topics"]}>
          <div
            className={styles["topic"]}
            onClick={() => setSelectedTopic("flexbox")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 17V7H8V17H6Z" fill="currentColor" />
              <path d="M16 7V17H18V7H16Z" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 3H22V21H2V3ZM4 5V19H20V5H4Z"
                fill="currentColor"
              />
            </svg>
            <p>FlexBox</p>
          </div>
          <div
            className={styles["topic"]}
            onClick={() => setSelectedTopic("grid")}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 7V11H11V7H7Z" fill="currentColor" />
              <path d="M13 7H17V11H13V7Z" fill="currentColor" />
              <path d="M13 13V17H17V13H13Z" fill="currentColor" />
              <path d="M7 13H11V17H7V13Z" fill="currentColor" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 3H21V21H3V3ZM5 5V19H19V5H5Z"
                fill="currentColor"
              />
            </svg>
            <p>Grid</p>
          </div>
        </div>
        <div className={styles["content"]}>
          {selectedTopic !== "" && (
            <FlexGridContent selectedTopic={selectedTopic} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CSSPage;
