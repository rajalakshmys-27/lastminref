import React, { Fragment, useEffect, useState } from "react";
import styles from "./flexbox.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../slice/RootReducer";
import CopyToClipboard from "react-copy-to-clipboard";
import SyntaxHighlighter from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { flexCheatSheetDataRequest } from "../../slice/cssCheatSheetSlice";
import { FlexboxData } from "../../models/models";
import useScreenSize from "../../utils/hook/useScreenSize";

const FlexBoxContent = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});

  const cssCheatSheetData = useSelector(
    (state: RootState) => state.cssCheatSheet.cssCheatSheetDetails
  );

  const oddItems = cssCheatSheetData?.flexboxData?.filter(
    (_, index) => index % 2 === 0
  );
  const evenItems = cssCheatSheetData?.flexboxData?.filter(
    (_, index) => index % 2 !== 0
  );

  const isDesktopView = useScreenSize().deviceSize.width > 991;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(flexCheatSheetDataRequest());
  }, [dispatch]);

  const handleCopy = (index: number) => {
    setCopied((prevState) => ({ ...prevState, [index]: true }));
    setTimeout(() => {
      setCopied((prevState) => ({ ...prevState, [index]: false }));
    }, 2000);
  };

  const gridItem = (item: FlexboxData, index: number) => {
    return (
      <div key={index} className={styles["flexbox-content"]}>
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
                    {copied[cmd.id] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-check2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-copy"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
                        />
                      </svg>
                    )}
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
    <div className={styles["flexbox-wrapper"]}>
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
        <>
          {cssCheatSheetData?.flexboxData?.map((item, index) =>
            gridItem(item, index)
          )}
        </>
      )}
    </div>
  );
};

export default FlexBoxContent;
