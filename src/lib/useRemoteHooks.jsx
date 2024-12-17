import { useContext } from "react";

import { RemoteHooksContext } from "./RemoteHooksContext";

export const useRemoteHooks = () => useContext(RemoteHooksContext);
