import React, { useEffect, useState } from "react";
import styles from "./cssPage.module.scss";
import FlexGridContent from "../../components/flexgrid";
import { useDispatch } from "react-redux";
import { cssCheatSheetDataRequest } from "../../slice/cssCheatSheetSlice";
import { AnimationIcon, CSSIcon, FlexBoxIcon, GridIcon } from "../../icons";
import TopicItem from "../../components/topicitem";

const CSSPage = () => {
  const [selectedTopic, setSelectedTopic] = useState("CSS");

  const topics = [
    { icon: <CSSIcon />, label: "CSS" },
    { icon: <FlexBoxIcon />, label: "FlexBox" },
    { icon: <GridIcon />, label: "Grid" },
    { icon: <AnimationIcon />, label: "Animation" },
  ];

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
          {topics.map((topic) => (
            <TopicItem
              key={topic.label}
              icon={topic.icon}
              label={topic.label}
              onClick={() => setSelectedTopic(topic.label)}
            />
          ))}
        </div>
        <div className={styles["content"]}>
          {selectedTopic && <FlexGridContent selectedTopic={selectedTopic} />}
        </div>
      </div>
    </div>
  );
};

export default CSSPage;
