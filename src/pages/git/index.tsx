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
  const [showTooltip, setShowTooltip] = useState<{ [key: number]: boolean }>(
    {}
  );

  const gitCommandsData = useSelector(
    (state: RootState) => state.gitCommands.gitCommandDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gitCommandsDataRequest());
  }, [dispatch]);

  console.log("gitCommandsData", gitCommandsData.gitCommands);

  const commands = [
    {
      description: "Pull the latest changes from the remote repository",
      command: "git pull origin <branch_name>",
    },
    {
      description: "Push your changes to the remote repository",
      command: "git push origin <branch_name>",
    },
  ];

  const handleCopy = (index: number) => {
    setShowTooltip((prevState) => ({ ...prevState, [index]: true }));
    setTimeout(() => {
      setShowTooltip((prevState) => ({ ...prevState, [index]: false }));
    }, 900);
  };

  return (
    <div className="git-page">
      <div>
        <h1>Git</h1>
      </div>
      <div>
        <p>
          Git is a distributed version control system for tracking changes in
          source code during software development.
        </p>
        <p>
          It is designed for coordinating work among programmers, but it can be
          used to track changes in any set of files.
        </p>
      </div>
      {gitCommandsData.gitCommands?.map((item, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
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
                    <OverlayTrigger
                      show={showTooltip[index]}
                      placement="right"
                      overlay={
                        <Tooltip id={`button-tooltip-${index}`}>
                          Copied!
                        </Tooltip>
                      }
                    >
                      <span>
                        <FaCopy />
                      </span>
                    </OverlayTrigger>
                  </span>
                </CopyToClipboard>
              </div>
            </>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GitPage;
