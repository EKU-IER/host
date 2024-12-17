import { RemoteHooksContext } from "./RemoteHooksContext";
import loadRemoteModule from "./loadRemoteModule";
import { usePromise } from "./usePromise";
import { url } from "./url";

const promise = loadRemoteModule(url);

export function RemoteHooksProvider({ children }) {
  const module = usePromise(promise);

  const object = module && module.default;

  return (
    <RemoteHooksContext.Provider value={object}>
      {object && children}
    </RemoteHooksContext.Provider>
  );
}
