/**
 * A custom hook for managing the state of an open panel.
 *
 * @returns {{panel: boolean, setPanel: Function}} An object containing the panel state and a function to update it.
 */
import { openPanel } from "atoms/allAtoms";

const { useAtom } = require("jotai");

const useOpenPanel = () => {
  const [panel, setPanel] = useAtom(openPanel);

  return { panel, setPanel };
};

export default useOpenPanel;
