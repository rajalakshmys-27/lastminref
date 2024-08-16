import React, { useEffect, useState } from "react";
import styles from "./cssPage.module.scss";
import FlexGridContent from "../../components/flexgrid";
import { useDispatch } from "react-redux";
import { cssCheatSheetDataRequest } from "../../slice/cssCheatSheetSlice";
import { AnimationIcon, CSSIcon, FlexBoxIcon, GridIcon } from "../../icons";
import TopicItem from "../../components/topicitem";

const CSSPage = () => {
  const [selectedTopic, setSelectedTopic] = useState("cssbasics");

  const topics = [
    { icon: <CSSIcon />, label: "CSS Basics", value: "cssbasics" },
    { icon: <FlexBoxIcon />, label: "FlexBox", value: "flexbox" },
    { icon: <GridIcon />, label: "Grid", value: "grid" },
    { icon: <AnimationIcon />, label: "Animation", value: "animation" },
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
              key={topic.value}
              icon={topic.icon}
              label={topic.label}
              onClick={() => setSelectedTopic(topic.value)}
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
