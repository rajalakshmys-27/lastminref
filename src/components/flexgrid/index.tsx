import React, { Fragment, useState } from "react";
import styles from "./flexgrid.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../slice/RootReducer";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import {
  CheatSheetData,
  CSSCheatSheetData,
  getCheatSheetData,
} from "../../models/models";
import useScreenSize from "../../utils/hook/useScreenSize";
import { CheckIcon, CopyIcon } from "../../icons";

const FlexGridContent = ({ selectedTopic }: any) => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});

  const cssCheatSheetData: CheatSheetData = useSelector(
    (state: RootState) => state.cssCheatSheet.cssCheatSheetDetails
  );

  const selectData = () => {
    const dataKey = `${selectedTopic}Data`;
    return getCheatSheetData(cssCheatSheetData, dataKey) || [];
  };

  const data = selectData();

  const oddItems = data?.filter((_: any, index: number) => index % 2 === 0);
  const evenItems = data?.filter((_: any, index: number) => index % 2 !== 0);

  const isDesktopView = useScreenSize().deviceSize > 992;

  const handleCopy = (index: number) => {
    setCopied((prevState) => ({ ...prevState, [index]: true }));
    setTimeout(() => {
      setCopied((prevState) => ({ ...prevState, [index]: false }));
    }, 2000);
  };

  const gridItem = (item: CSSCheatSheetData, index: number) => {
    return (
      <div key={index} className={styles["flexgrid-content"]}>
        <h4 className={styles["topic"]}>{item.topic}</h4>
        {item.commands?.map((cmd) => (
          <Fragment key={cmd.id}>
            <h5>{cmd.heading}</h5>
            <p>
              {cmd.description} <br />
              {cmd.values && <span>Values : {cmd.values}</span>}
            </p>

            {cmd.command && (
              <div className={styles["command-container"]}>
                <SyntaxHighlighter language="bash" style={darcula}>
                  {cmd.command}
                </SyntaxHighlighter>
                <CopyToClipboard
                  text={cmd.command}
                  onCopy={() => handleCopy(cmd.id)}
                >
                  <span className={styles["copy-button"]}>
                    {copied[cmd.id] ? <CopyIcon /> : <CheckIcon />}
                  </span>
                </CopyToClipboard>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className={styles["flexgrid-wrapper"]}>
      {isDesktopView ? (
        <>
          <div style={{ gridColumn: 1 }}>
            {oddItems?.map((item, index) => gridItem(item, index))}
          </div>
          <div style={{ gridColumn: 2 }}>
            {evenItems?.map((item, index) => gridItem(item, index))}
          </div>
        </>
      ) : (
        <>{data?.map((item, index) => gridItem(item, index))}</>
      )}
    </div>
  );
};

export default FlexGridContent;
