import About from "./Commands/About";
import Clear from "./Commands/Clear";
import Help from "./Commands/Help";
import Welcome from "./Commands/Welcome";
import Project from "./Commands/Project";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  return (
    <div>
      {{
        welcome: <Welcome />,
        about: <About />,
        clear: <Clear />,
        help: <Help />,
        project: <Project />,
      }[cmd] || <div>command not found: {cmd}</div>}
    </div>
  );
};

export default Output;
