import React, { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./git.css";
import { useSelector } from "react-redux";
import { RootState } from "../../slice/RootReducer";
import { useDispatch } from "react-redux";
import { gitCommandsDataRequest } from "../../slice/gitCommandSlice";

const GitPage: React.FC = () => {
  const [copied, setCopied] = useState<{ [key: number]: boolean }>({});

  const gitCommandsData = useSelector(
    (state: RootState) => state.gitCommands.gitCommandDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gitCommandsDataRequest());
  }, [dispatch]);

  const handleCopy = (index: number) => {
    setCopied((prevState) => ({ ...prevState, [index]: true }));
    setTimeout(() => {
      setCopied((prevState) => ({ ...prevState, [index]: false }));
    }, 2000);
  };

  return (
    <div className="git-page">
      <div className="heading-container">
        <h1>Git Cheatsheet</h1>
        <p>
          Discover essential Git commands and tips in our concise cheatsheet,
          perfect for streamlining your version control workflow.
        </p>
      </div>
      <div className="cheatsheet-container">
        {gitCommandsData.gitCommands?.map((item, index) => (
          <div key={index} className="command-wrapper">
            <h4>{item.topic}</h4>
            {item.commands?.map((cmd, index) => (
              <>
                <p>{cmd.description}</p>
                <div className="command-container">
                  <SyntaxHighlighter language="bash" style={darcula}>
                    {cmd.command}
                  </SyntaxHighlighter>
                  <CopyToClipboard
                    text={cmd.command}
                    onCopy={() => handleCopy(index)}
                  >
                    <span className="copy-button">
                      {copied[index] ? (
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
              </>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitPage;
