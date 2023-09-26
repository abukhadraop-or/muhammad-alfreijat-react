import { openPanel } from "atoms/allAtoms";

const { useAtom } = require("jotai");

const useOpenPanel = () => {
  const [panel, setPanel] = useAtom(openPanel);

  return { panel, setPanel };
};

export default useOpenPanel;
