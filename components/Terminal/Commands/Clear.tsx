import { useContext } from "react";
import { termContext } from "../Terminal";

const Clear: React.FC = () => {
  const { clearHistory } = useContext(termContext);
  clearHistory?.();
  return null;
};

export default Clear;
