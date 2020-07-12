import React from "react";
import {
  IoLogoJavascript,
  IoLogoAndroid,
  IoLogoApple,
  IoLogoNodejs,
} from "react-icons/io";
import {
  FaReact,
  FaGitlab,
  FaGithub,
  FaHtml5,
  FaCss3,
  FaDocker,
  FaAmazon,
  FaGoogle,
  FaChrome
} from "react-icons/fa";
import { Tooltip } from "antd";

const Tools = () => {
  return (
    <>
      <Tooltip title="Node js">
        <IoLogoNodejs size={40} color="#A13941" className="mr-5 mb-2" />
      </Tooltip>
      <Tooltip title="React js">
        <FaReact size={40} color="#A13941" className="mr-5 mb-2" />
      </Tooltip>
      <Tooltip title="Docker">
        <FaDocker size={40} color="#A13941" className="mr-5" />
      </Tooltip>
      <Tooltip title="Amazon">
        <FaAmazon size={40} color="#A13941" className="mr-5 mb-2" />
      </Tooltip>
      <Tooltip title="Google APIS">
        <FaGoogle size={40} color="#A13941" className="mr-5 mb-2" />
      </Tooltip>
      <Tooltip title="Gitlab">
        <FaGitlab size={40} color="#A13941" className="mr-5 mb-2" />
      </Tooltip>
      <Tooltip title="Github">
        <FaGithub size={40} color="#A13941" className="mr-5 mb-2" />
      </Tooltip>
      <Tooltip title="Android">
        <IoLogoAndroid size={40} color="#A13941" className="mr-5 mb-2" />
      </Tooltip>
      <Tooltip title="Apple">
        <IoLogoApple size={40} color="#A13941" className="mr-5 mb-2" />
      </Tooltip>
      <Tooltip title="Chrome">
        <FaChrome size={40} color="#A13941" className="mr-5" />
      </Tooltip>
      <Tooltip title="Javascript">
        <IoLogoJavascript size={40} color="#A13941" className="mr-5 mb-2" />
      </Tooltip>
      <Tooltip title="HTML">
        <FaHtml5 size={40} color="#A13941" className="mr-5" />
      </Tooltip>
      <Tooltip title="CSS">
        <FaCss3 size={40} color="#A13941" className="mr-5" />
      </Tooltip>
    </>
  );
};

export default Tools
