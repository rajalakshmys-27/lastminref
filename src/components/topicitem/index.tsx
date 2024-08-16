import React, { useState } from "react";
import styles from "./topicitem.module.scss";
import { TopicItemProps } from "../../models/models";

const TopicItem: React.FC<TopicItemProps> = ({
  icon,
  label,
  onClick,
  isActive,
}) => {
  return (
    <div
      className={`${styles["topic"]} ${isActive ? styles["active"] : ""}`}
      onClick={onClick}
    >
      {icon}
      <p>{label}</p>
    </div>
  );
};

export default TopicItem;
