import React from "react";
import styles from "./topicitem.module.scss";
import { TopicItemProps } from "../../models/models";

const TopicItem: React.FC<TopicItemProps> = ({ icon, label, onClick }) => {
  return (
    <div className={styles["topic"]} onClick={onClick}>
      {icon}
      <p>{label}</p>
    </div>
  );
};

export default TopicItem;
