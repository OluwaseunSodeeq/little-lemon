import { useContext } from "react";
import { CombinedContextsData } from "./CombinedContexts";

function useCombinedContexts() {
  const context = useContext(CombinedContextsData);
  if (context === undefined)
    throw new Error(" context was used outside open context provider");
  return context;
}

export default useCombinedContexts;
